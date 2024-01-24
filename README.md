# Configuring
1. Configure environment to run web3.js and install library web3.js
![image_2024-01-22_15-51-57](https://github.com/tonymontana143/Configuring/assets/125411745/1bcbe558-90a2-428d-9a75-dd5ed894d1e2)
2. Configure web3.js to run with Ganache and/or any Public Testnet
```javascript
const infuraApiKey = '0a8b302fca724177ab0bcf1693f0aeb4';
const web3 = new Web3(`https://sepolia.infura.io/v3/0a8b302fca724177ab0bcf1693f0aeb4`, { timeout: 60000 });
```
3. Configure Metamaskwith Ganacheand/or any PublicTestnet
   ![image](https://github.com/tonymontana143/Configuring/assets/125411745/5137dec8-1460-4b00-b69c-fba1b59656e6)
4. Deploy the contract from Assignment 1 toGanacheand/or any PublicTestnet
   ![image](https://github.com/tonymontana143/Configuring/assets/125411745/342f3503-6ee5-4e6d-a859-ecc083b42790)
5. Call any functions of smart contract from step 4 from environment which you have configured from steps 1,2,3
   
```javascript
contract.methods.balanceOf(userAddress).call()
    .then(balance => {
        console.log(`Balance of ${userAddress}: ${balance} tokens`);
    })
    .catch(error => {
        console.error('Error checking balance:', error);
    });
```

   ![image](https://github.com/tonymontana143/Configuring/assets/125411745/e90fe7bc-7e00-4f31-9fd5-5a93370c09fb)


