import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractComponent } from './contract.component';
import { BuyLimitComponent } from './components/buy-limit/buy-limit.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellLimitComponent } from './components/sell-limit/sell-limit.component';


@NgModule({
  declarations: [
    ContractComponent,
    BuyLimitComponent,
    SellLimitComponent,
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
