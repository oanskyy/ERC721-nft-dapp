/* eslint-env node */
require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

const { VITE_ALCHEMY_API_URL, VITE_PRIVATE_KEY, VITE_PRIVATE_KEY2, VITE_ETHERSCAN_API_KEY } =
    process.env

module.exports = {
    defaultNetwork: "localhost",
    networks: {
        hardhat: {},
        sepolia: {
            url: VITE_ALCHEMY_API_URL,
            accounts: [`0x${VITE_PRIVATE_KEY}`, `0x${VITE_PRIVATE_KEY2}`],
        },
    },
    solidity: {
        version: "0.8.19",
        settings: {
            optimizer: { enabled: true, runs: 200 },
        },
    },
    etherscan: {
        apiKey: VITE_ETHERSCAN_API_KEY,
    },
}
