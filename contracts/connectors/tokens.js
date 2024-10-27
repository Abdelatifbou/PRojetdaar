const { ethers, JsonRpcProvider } = require('ethers');

// Connect to Ethereum network
const provider = new JsonRpcProvider('http://localhost:8545');
const wallet = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider);

// Load your NFT smart contract (replace with your contract address and ABI)
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const contract = require("../artifacts/src/Main.sol/Main.json");
const contractABI = contract.abi; // Your contract's ABI
const nftContract = new ethers.Contract(contractAddress, contractABI, wallet);
//0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266

const getNFTsOfOwner = async (ownerAddress) => {
    const balance = await nftContract.balanceOf(ownerAddress); //Returns the number of tokens owned by the address

    let tokens = [];

    for (let i = 0; i < balance.length; i++) {
        for (let j = 0; j < balance[i]; j++) {
            const tokenId = await nftContract.tokenOfOwnerByIndex(i, ownerAddress, j); //Get the token ID based on the index from the balanceOf call
            const tokenURI = await nftContract.tokenURI(i, tokenId);
            tokens.push({ tokenId: tokenId.toString(), tokenURI: tokenURI });
        }
    }

    console.log(tokens);
    return tokens;
}



module.exports = {
    getNFTsOfOwner
};
