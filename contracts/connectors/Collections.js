const { ethers, JsonRpcProvider, NonceManager } = require('ethers');
const axios = require('axios');

// Connect to Ethereum network
const provider = new JsonRpcProvider('http://localhost:8545');
const wallet = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider);

// Load your NFT smart contract (replace with your contract address and ABI)
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const contract = require("../artifacts/src/Main.sol/Main.json");
const { POKEMONURL } = require("../utils/index");
const { mintNFT } = require('./mintNFT');
const contractABI = contract.abi; // Your contract's ABI
const nftContract = new ethers.Contract(contractAddress, contractABI, new NonceManager(wallet));
const _LIMIT = 20;


// Mint a the NFT
const fetchAndCreateNFTCollection = async () => {
    const response = await axios.get(`${POKEMONURL}/sets`);
    const data = response.data;
    // loop through the data and create a collection
    for (let i = 0; i < _LIMIT; i++) {
        //i< data.data.length
        const set = data.data[i];
        const tx = await nftContract.createCollection(set.id, set.name, set.total);
    }

    console.log('Collection created');
    // mintNFT("base1", '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', 'mcd19-3');
}

module.exports = {
    fetchAndCreateNFTCollection
};