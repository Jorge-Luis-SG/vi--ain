import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Web3UtilsPipe } from './web3-utils.pipe';
import { TruncateWalletAddressPipe } from './truncate-wallet-address.pipe';
import { PairPipe } from './pair.pipe';
import { Erc20Pipe } from './erc20.pipe';
import { Erc721Pipe } from './erc721.pipe';
import { GetAddressPipe } from './get-address.pipe';



@NgModule({
  declarations: [
    Web3UtilsPipe,
    TruncateWalletAddressPipe,
    PairPipe,
    Erc20Pipe,
    Erc721Pipe,
    GetAddressPipe,
  ],
  exports: [
    Web3UtilsPipe,
    TruncateWalletAddressPipe,
    PairPipe,
    Erc20Pipe,
    Erc721Pipe,
    GetAddressPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
