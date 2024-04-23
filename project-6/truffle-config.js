const HDWallet = require("@truffle/hdwallet-provider")
const infuraKey = "d77500323de149dcbbbdb6532350d64a"
const mnemonic =
  "spin leave badge hat guilt destroy test life village tail sugar unveil" // removed from public network.
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      // provider: () =>
      //   new Web3.providers.WebsocketProvider("ws://127.0.0.1:8545"),
    },
    sepolia: {
      // host: "127.0.0.1",
      provider: () =>
        new HDWallet(mnemonic, `https://sepolia.infura.io/v3/${infuraKey}`),
      network_id: "11155111",
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
  },
  compilers: {
    solc: {
      version: ">0.4.24 <0.4.26",
    },
  },
}
