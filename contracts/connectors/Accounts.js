const { ethers, JsonRpcProvider } = require('ethers');

// Connect to Ethereum network
const provider = new JsonRpcProvider('http://localhost:8545');
const wallet = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider);

// Load your NFT smart contract (replace with your contract address and ABI)
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const contract = require("../artifacts/src/Main.sol/Main.json");
const contractABI = contract.abi; // Your contract's ABI
const nftContract = new ethers.Contract(contractAddress, contractABI, wallet);

// Mint a new NFT
const getOwners = async () => {
    const tx = await nftContract.getOwners();
    return tx;
}

module.exports = {
    getOwners
};