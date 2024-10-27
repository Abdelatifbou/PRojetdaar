// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Card is ERC721, Ownable, ERC721Enumerable, ERC721URIStorage {
  uint256 private nextTokenId;
  string private baseURI;

  constructor(
    string memory initialBaseURI,
    address theOwner
  ) ERC721("Card", "AFS") Ownable(theOwner) {
    nextTokenId = 1;
    baseURI = initialBaseURI;
  }

  // set of functions that are overridden from the parent contracts (Obligated by solidity!)
  // help of (https://ethereum.stackexchange.com/questions/111939/overriding-a-function-does-not-work-as-expected)
  function _increaseBalance(
    address account,
    uint128 amount
  ) internal override(ERC721, ERC721Enumerable) {
    super._increaseBalance(account, amount);
  }

  function _update(
    address to,
    uint256 tokenId,
    address auth
  ) internal override(ERC721, ERC721Enumerable) returns (address) {
    return super._update(to, tokenId, auth);
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

  function tokenURI(
    uint256 tokenId
  ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
    return super.tokenURI(tokenId);
  }

  function setBaseURI(string memory newBaseURI) external onlyOwner {
    // only the owner of the contract can change the baseURI
    baseURI = newBaseURI;
  }

  function _baseURI() internal view override returns (string memory) {
    return baseURI;
  }

  // mint a new card with the given cardID and assign it to the given address
  function mint(address to, string memory cardID) public returns (uint256) {
    uint256 newTokenID = nextTokenId;
    nextTokenId++;
    _safeMint(to, newTokenID);
    _setTokenURI(newTokenID, string.concat(baseURI, cardID));
    return newTokenID;
  }

  function getTokensForOwner(
    address owner
  ) public view returns (uint256[] memory) {
    uint256 total = balanceOf(owner);
    uint256[] memory tokens = new uint256[](total);

    for (uint256 i = 0; i < total; i++) {
      tokens[i] = tokenOfOwnerByIndex(owner, i);
    }

    return tokens;
  }
}
