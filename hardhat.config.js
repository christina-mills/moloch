const hardhat = require("hardhat/config");
const { usePlugin } = hardhat;

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-truffle5");
require("./scripts/moloch-tasks");
require("./scripts/pool-tasks");

const INFURA_API_KEY = "d00f341268954cc79fe46df8c67d4aa0";
const MAINNET_PRIVATE_KEY = "61a2f2a81fa797e4e1c607185f987ba73340c094ff09d3046e69c3d3e89bc22e";
const ROPSTEN_PRIVATE_KEY = "61a2f2a81fa797e4e1c607185f987ba73340c094ff09d3046e69c3d3e89bc22e";
const RINKEBY_PRIVATE_KEY = "61a2f2a81fa797e4e1c607185f987ba73340c094ff09d3046e69c3d3e89bc22e";
const ETHERSCAN_API_KEY = "NIDSFVTPUC1GQ12QSQXMYU8BZ6I8D7FCMT";

module.exports = {
  networks: {
    develop: {
      url: "http://localhost:8545",
      deployedContracts: {
        moloch: "",
        pool: ""
      }
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [ROPSTEN_PRIVATE_KEY],
      deployedContracts: {
        moloch: "",
        pool: ""
      }
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [RINKEBY_PRIVATE_KEY],
      deployedContracts: {
        moloch: "",
        pool: ""
      }
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [MAINNET_PRIVATE_KEY],
      deployedContracts: {
        moloch: "0x1fd169A4f5c59ACf79d0Fd5d91D1201EF1Bce9f1", // The original Moloch
        pool: ""
      }
    },
    coverage: {
      url: "http://localhost:8555"
    }
  },
  solidity: {
    version: "0.5.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    // The url for the Etherscan API you want to use.
    // For example, here we're using the one for the Ropsten test network
    url: "https://api.etherscan.io/api",
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY
  }
};
