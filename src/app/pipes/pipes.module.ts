import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Web3UtilsPipe } from './web3-utils.pipe';
import { TruncateWalletAddressPipe } from './truncate-wallet-address.pipe';
import { PairPipe } from './pair.pipe';
import { Erc20Pipe } from './erc20.pipe';
import { Erc721Pipe } from './erc721.pipe';



@NgModule({
  declarations: [
    Web3UtilsPipe,
    TruncateWalletAddressPipe,
    PairPipe,
    Erc20Pipe,
    Erc721Pipe,
  ],
  exports: [
    Web3UtilsPipe,
    TruncateWalletAddressPipe,
    PairPipe,
    Erc20Pipe,
    Erc721Pipe,
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
