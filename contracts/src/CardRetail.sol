// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CardRetail is Ownable {
  // inspired by SIDAHMED
  ERC721 public nftContract; // The ERC721 NFT contract

  struct Listing {
    address seller; // Address of the seller
    uint256 tokenId; // ID of the NFT
    uint256 price; // Price of the NFT
    bool isSold; // Flag to indicate if the NFT is sold
  }

  Listing[] public listings; // A dynamic array of all the listings on the marketplace

  // events to be emitted later on.
  event NFTListed(
    address indexed seller,
    uint256 indexed tokenId,
    uint256 price
  );
  event NFTSold(
    address indexed buyer,
    address indexed seller,
    uint256 indexed tokenId,
    uint256 price
  );

  constructor(
    address _nftContractAddress,
    address intialOwner
  ) Ownable(intialOwner) {
    nftContract = ERC721(_nftContractAddress); // Initialize the NFT contract
  }

  // List an NFT on the marketplace
  function listNFT(uint256 _tokenId, uint256 _price) external {
    // Check if the sender is the owner of the NFT
    if (nftContract.ownerOf(_tokenId) != msg.sender) {
      revert("You don't own this NFT");
    }
    if (_price == 0) {
      revert("Price must be greater than 0");
    }

    nftContract.approve(address(this), _tokenId);

    // Add the NFT to the marketplace
    listings.push(
      Listing({
        seller: msg.sender,
        tokenId: _tokenId,
        price: _price,
        isSold: false
      })
    );

    emit NFTListed(msg.sender, _tokenId, _price); // Emit an event
  }

  // Buy an NFT from the marketplace
  function buyNFT(uint256 _listingIndex) external payable {
    if (_listingIndex >= listings.length) {
      revert("Invalid listing index");
    }

    // Get the listing
    Listing storage listing = listings[_listingIndex];

    require(!listing.isSold, "NFT is already sold");
    require(msg.value >= listing.price, "Insufficient funds to purchase");

    // Transfer NFT to the buyer
    nftContract.safeTransferFrom(listing.seller, msg.sender, listing.tokenId);

    // Mark the NFT as sold
    listing.isSold = true;

    // Transfer the payment to the seller
    payable(listing.seller).transfer(listing.price);
  }

  // Get the total number of listings on the marketplace
  function getListingCount() external view returns (uint256) {
    return listings.length;
  }

  //  Get a list of all the listings on the marketplace
  function getListings() external view returns (Listing[] memory) {
    return listings;
  }

  // Get the details of a specific listing
  function getListing(
    uint256 _listingIndex
  ) external view returns (Listing memory) {
    require(_listingIndex < listings.length, "Invalid listing index");
    return listings[_listingIndex];
  }
}
