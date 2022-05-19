import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SecurityModule } from './security/security.module';
import { ContractModule } from './contract/contract.module';
import { FactorySwapComponent } from './factory-swap/factory-swap.component';
import { FactorySwapModule } from './factory-swap/factory-swap.module';


@NgModule({
  declarations: [
    DashboardComponent,
    FactorySwapComponent,
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
  ]
})
export class AdminModule { }
