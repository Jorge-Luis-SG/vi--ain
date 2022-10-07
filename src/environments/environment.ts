// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// https://www.rapidtables.com/convert/number/hex-to-decimal.html

export const environment = {
  production: false,
  projectName: "VI-ain",
  API_URL: '#',
  urlWeb: '#',
  configUrlAbi: "/assets/abi/DevToken.json",
  contractAddress: "0xF40653f5ae2Bd90A8b9C493F15bFB24F6F3b1CC8",
  marketplaceAddress: "#",
  infuraId: "#",
  urlTokenLogo: "#",
  mainToken: {
    contract: "#",
    name: "#",
    symbol: "#",
    decimals: 0,
  },
  nftCollectionContract: "#",
  chain: {

    // Testnet
    chainId: 5,
    chainIdMetamask: "0x5",
    chainName: "Goerli test network",
    rpc: "https://goerli.infura.io/v3/356256bc3fcf42de88d2bc2e129ea5d9",
    rpcUrls: ["https://goerli.infura.io/v3/356256bc3fcf42de88d2bc2e129ea5d9"],
    blockExplorerUrls: ["https://goerli.etherscan.io/"],

    // Mainnnet 
    // chainId: 1,
    // chainIdMetamask: "0x1",
    // chainName: "Ethereum Mainnet",
    // rpc: "https://mainnet.infura.io/v3/356256bc3fcf42de88d2bc2e129ea5d9",
    // rpcUrls: ["https://mainnet.infura.io/v3/356256bc3fcf42de88d2bc2e129ea5d9"],
    // blockExplorerUrls: ["https://etherscan.io/"],

    nativeCurrency: {
      name: "Ethereum Mainnet",
      symbol: "ETH",
      decimals: 18,
    },
  },
  sanity: {
    projectId: 'xeqvg5n1',
    dataset: 'production',
    useCdn: true,
  },
  web: {
    url: 'http://localhost:4200',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
