/* eslint-env node */
require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

const {
	VITE_ALCHEMY_API_URL,
	VITE_PRIVATE_KEY,
	VITE_PRIVATE_KEY2,
	VITE_ETHERSCAN_API_KEY
} = process.env

module.exports = {
	defaultNetwork: "localhost",
	networks: {
		hardhat: {},
		// ganache: {
		// 	url: "http://127.0.0.1:7545",
		// 	accounts: [`0x${VITE_PRIVATE_KEY}`, `0x${VITE_PRIVATE_KEY2}`]
		// },
		sepolia: {
			url: VITE_ALCHEMY_API_URL,
			accounts: [`0x${VITE_PRIVATE_KEY}`, `0x${VITE_PRIVATE_KEY2}`]
		}
	},
	solidity: {
		version: "0.8.19",
		settings: {
			optimizer: { enabled: true, runs: 200 }
		}
	},
	etherscan: {
		apiKey: VITE_ETHERSCAN_API_KEY
	}
}

// npx hardhat run scripts/deploy.js --network sepolia                        
// myNFT deployed to: 0x514424f573F84E40dC953490D0A305b33267d005