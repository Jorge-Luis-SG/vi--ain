// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// https://www.rapidtables.com/convert/number/hex-to-decimal.html

export const environment = {
  production: false,
  projectName: "KANNABIS CITY",
  API_URL: '#',
  urlWeb: '#',
  configUrlAbi: "/assets/abi/DevToken.json",
  contractAddress: "0xF9B0fA1A4682ED93FF439adee1917ef1DE587285",
  marketplaceAddress: "0xC84F2c49922472c978B118C4d01A75148b639b70",
  infuraId: "#",
  urlTokenLogo: "#",
  mainToken: {
    contract: "0xB735eb7f14E223e36aDFB6e9b8fD55797792a351",
    name: "DAPP TEST",
    symbol: "DPPT",
    decimals: 18,
  },
  nftCollectionContract: "0x9C43Faac179b6b6EF601d260Cc6aa2fc7604e20B",
  chain: {

    // Testnet
    chainId: 97,
    chainIdMetamask: "0x61",
    chainName: "BNB Smart Chain Testnet",
    rpc: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
    blockExplorerUrls: ["https://testnet.bscscan.com/"],

    // Mainnnet 
    // chainId: 56,
    // chainIdMetamask: "0X38",
    // chainName: "BNB Smart Chain Mainnet",
    // rpc: "https://bsc-dataseed1.binance.org/",
    // rpcUrls: ["https://bsc-dataseed1.binance.org/"],
    // blockExplorerUrls: ["https://bscscan.com/"],

    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
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
