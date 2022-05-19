import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FactorySwapComponent } from './factory-swap/factory-swap.component';
import { FactorySwapUpdatePairComponent } from './factory-swap-update-pair/factory-swap-update-pair.component';
import { WithdrawTokenOnwerComponent } from './withdraw-token-onwer/withdraw-token-onwer.component';
import { BalanceOfContractEtherComponent } from './balance-of-contract-ether/balance-of-contract-ether.component';
import { SecurityModule } from './security/security.module';
import { ContractModule } from './contract/contract.module';


@NgModule({
  declarations: [
    DashboardComponent,
    FactorySwapComponent,
    FactorySwapUpdatePairComponent,
    WithdrawTokenOnwerComponent,
    BalanceOfContractEtherComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    SecurityModule,
    ContractModule,
  ]
})
export class AdminModule { }
