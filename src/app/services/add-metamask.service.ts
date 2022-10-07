import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sweetalert2Service } from './sweetalert2.service';

@Injectable({
  providedIn: 'root'
})
export class AddTokenAMetamaskService {

  constructor() { }

  async addToken() {
    try {

      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: environment.mainToken.contract, // The address that the token is at.
            symbol: environment.mainToken.symbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: environment.mainToken.decimals, // The number of decimals in the token
            image: environment.urlTokenLogo, // A string url of the token logo
          },
        },
      });

      // console.log({wasAdded});

      // if (!wasAdded) { return; }

      // return await this.sweetAlertSrv.showSuccess(`${environment.mainToken.symbol} was added`);

    } catch (error) {
      // alert(JSON.stringify(error));
      console.log(error);
    }
  }


  /**
   * Registrar cadena en la billetera
   * @returns 
   */
  async addChainId(){
    try {
      const wasAdded = await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: environment.chain.chainIdMetamask,
            rpcUrls: environment.chain.rpcUrls,
            chainName: environment.chain.chainName,
            nativeCurrency: environment.chain.nativeCurrency,
            blockExplorerUrls: environment.chain.blockExplorerUrls,
          }
        ],
      });

      // console.log({wasAdded});
      return wasAdded;
    } catch (err: any) {

      /** Si tiene trasacciones pendientes por ejecutar */
      if(err.code === 4001){ 
        err.message = 'Please, confirm the request for change of network';
      }

      /** Si tiene trasacciones pendientes por ejecutar */
      if(err.code === -32002){ 
        err.message = 'You have pending requests on your wallet. Please, check on your wallet before continuing';
      }

      throw err;
    }
  }


  /**
   * Disparar método para cambiar de red o añadirla
   * @returns 
   */
  async changeChainIdOrAdd(){
    try {
      const tryChange = await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: environment.chain.chainIdMetamask }],
      });

      // console.log({tryChange});

      return tryChange
    } catch (err: any) {

      /** Si no tiene la red registrada */
      if(err.code === 4902){ return await this.addChainId(); }

      /** Si tiene trasacciones pendientes por ejecutar */
      if(err.code === 4001){ 
        err.message = 'Please, confirm the request for change of network';
      }

      /** Si tiene trasacciones pendientes por ejecutar */
      if(err.code === -32002){ 
        err.message = 'You have pending requests on your wallet. Please, check on your wallet before continuing';
      }

      throw err;
    }
  }

  async addEthereumChain() {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: environment.chain.chainIdMetamask }],
      });
      return true;
    } catch (err: any) {
      console.log("error", err)

      if (err.code === 4902) {
        try {
          const wasAdded = await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: environment.chain.chainIdMetamask,
                chainName: environment.chain.chainName,
                nativeCurrency: environment.chain.nativeCurrency,
                rpcUrls: [ environment.chain.rpcUrls ],
                blockExplorerUrls: [ environment.chain.blockExplorerUrls ],
              },
            ],
          });


          if (wasAdded) {
            // console.log('Thanks!');
            // alert('Thanks!');
            return true;
          } else {
            // console.log('Your loss!');
            // alert('Your loss!');
            return false;
          }
        } catch (error: any) {
          throw error;
          console.log("error", error)
          // alert(JSON.stringify(error));
          return false;
        }
      }

      return false;
    }
  }
}
