import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SecurityModule } from './security/security.module';
import { ContractModule } from './contract/contract.module';
import { FactorySwapModule } from './factory-swap/factory-swap.module';
import { FactoryPoolModule } from './factory-pool/factory-pool.module';
import { FactoryStakeTokenModule } from './factory-stake-token/factory-stake-token.module';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    SecurityModule,
    ContractModule,
    FactorySwapModule,
    FactoryPoolModule,
    FactoryStakeTokenModule,
  ]
})
export class AdminModule { }
