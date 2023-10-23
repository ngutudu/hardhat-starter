import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config } from "dotenv";

config();

const hardhatConfig: HardhatUserConfig = {
  networks: {
    bsc: {
      url: "https://bsc-dataseed1.ninicoin.io/",
      gasPrice: 5000000000,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      gasPrice: 5000000000,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  etherscan: {
    apiKey: {
      bsc: process.env.BSC_API_KEY as string,
      bscTestnet: process.env.BSC_API_KEY as string,
    },
  },
};

export default hardhatConfig;
