// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Card.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract NFTPokemonBooster is
  ERC721,
  ERC721Enumerable,
  ERC721URIStorage,
  Ownable
{
  uint256 private nextTokenId; // The next token ID
  string private baseTokenURI; // The base token URI
  address private cardNftContract; // The ERC721 NFT contract

  uint256[] public boosterIds; // A dynamic array of all the boosters on the marketplace

  string public boosterName; // The name of the booster
  uint256 public cardCount; // The number of cards in the booster
  // list of CardNft nfts
  mapping(uint256 => uint256[]) public boosterCards;

  constructor(
    address _cardNftContract,
    address initialOwner,
    string memory newbaseURI
  ) ERC721("NFTPokemonBooster", "BFT") Ownable(initialOwner) {
    cardNftContract = _cardNftContract;
    baseTokenURI = newbaseURI;
  }

  // set of functions that are overridden from the parent contracts (Obligated by solidity!)
  function getCardsforBooster(
    uint256 boosterId
  ) public view returns (uint256[] memory) {
    return boosterCards[boosterId];
  }

  function getCardNftContract() public view returns (address) {
    return cardNftContract;
  }

  // help of (https://ethereum.stackexchange.com/questions/111939/overriding-a-function-does-not-work-as-expected)
  function getBoosterIds() public view returns (uint256[] memory) {
    return boosterIds;
  }

  function _update(
    address to,
    uint256 tokenId,
    address auth
  ) internal override(ERC721, ERC721Enumerable) returns (address) {
    return super._update(to, tokenId, auth);
  }

  function mint(
    address to,
    string memory boosterId,
    uint256[] memory cards
  ) public returns (uint256) {
    uint256 newTokenID = nextTokenId;
    nextTokenId++;
    _mint(to, newTokenID);
    _setTokenURI(newTokenID, string.concat(baseTokenURI, boosterId));
    boosterCards[newTokenID] = cards;
    boosterIds.push(newTokenID);
    return newTokenID;
  }

  function _increaseBalance(
    address account,
    uint128 value
  ) internal override(ERC721, ERC721Enumerable) {
    super._increaseBalance(account, value);
  }

  function tokenURI(
    uint256 tokenId
  ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
    return super.tokenURI(tokenId);
  }

  function supportsInterface(
    bytes4 interfaceId
  )
    public
    view
    override(ERC721, ERC721Enumerable, ERC721URIStorage)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }
}
