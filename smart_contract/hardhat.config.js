require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: process.env.INFURA_URL,
      accounts: [process.env.WALLET_KEY],
    },
  },
};
