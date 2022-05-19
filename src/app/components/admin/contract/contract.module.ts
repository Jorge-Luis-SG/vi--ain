import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractComponent } from './contract.component';
import { BuyLimitComponent } from './components/buy-limit/buy-limit.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellLimitComponent } from './components/sell-limit/sell-limit.component';
import { PausableComponent } from './components/pausable/pausable.component';
import { BurnComponent } from './components/burn/burn.component';
import { MintComponent } from './components/mint/mint.component';
import { TransferOwnershipComponent } from './components/transfer-ownership/transfer-ownership.component';
import { SetVaultAddressComponent } from './components/set-vault-address/set-vault-address.component';
import { WithdrawMaticOwnerComponent } from './components/withdraw-matic-owner/withdraw-matic-owner.component';
import { WithdrawTokenOnwerComponent } from './components/withdraw-token-onwer/withdraw-token-onwer.component';


@NgModule({
  declarations: [
    ContractComponent,
    BuyLimitComponent,
    SellLimitComponent,
    PausableComponent,
    BurnComponent,
    MintComponent,
    TransferOwnershipComponent,
    SetVaultAddressComponent,
    WithdrawMaticOwnerComponent,
    WithdrawTokenOnwerComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    ContractRoutingModule
  ]
})
export class ContractModule { }
