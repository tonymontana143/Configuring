const { Web3 } = require('web3');
const fs = require('fs');


const infuraApiKey = '0a8b302fca724177ab0bcf1693f0aeb4';
const web3 = new Web3(`https://sepolia.infura.io/v3/0a8b302fca724177ab0bcf1693f0aeb4`, { timeout: 60000 });


const contractAddress = '0x6c9a5f4ab0901de2b9f489b48d31a64af15cd63e';

// Read ABI from JSON file
const abiFilePath = 'ABI.json';
const abiRawData = fs.readFileSync(abiFilePath);
const abi = JSON.parse(abiRawData);

const contract = new web3.eth.Contract(abi, contractAddress);

const userAddress = '0xBac57d95b9FE32459E2167F0Ee69cBbE28109fBb';


// Example 1: Check balance of the user
contract.methods.balanceOf(userAddress).call()
.then(balance => {
        console.log(`Balance of ${userAddress}: ${balance} tokens`);
    })
    .catch(error => {
        console.error('Error checking balance:', error);
    });


    async function getLatestTransactionTimestamp() {
        try {
            const result = await contract.methods.getLatestTransactionTimestamp().call();
            console.log('Latest Transaction Timestamp:', result);
        } catch (error) {
            console.error('Error calling getLatestTransactionTimestamp:', error);
        }
    }
    
    async function getTransactionSender() {
        try {
            const result = await contract.methods.getTransactionSender().call();
            console.log('Transaction Sender:', result);
        } catch (error) {
            console.error('Error calling getTransactionSender:', error);
        }
    }
    
    async function getTransactionReceiver() {
        try {
            const result = await contract.methods.getTransactionReceiver().call();
            console.log('Transaction Receiver:', result);
        } catch (error) {
            console.error('Error calling getTransactionReceiver:', error);
        }
    }
    
    getLatestTransactionTimestamp();
    getTransactionSender();
    getTransactionReceiver();