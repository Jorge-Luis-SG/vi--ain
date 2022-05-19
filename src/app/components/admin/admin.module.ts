import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { BuyLimitComponent } from './buy-limit/buy-limit.component';
import { SellLimitComponent } from './sell-limit/sell-limit.component';
import { SetValueAddressComponent } from './set-value-address/set-value-address.component';
import { FactorySwapComponent } from './factory-swap/factory-swap.component';
import { FactorySwapUpdatePairComponent } from './factory-swap-update-pair/factory-swap-update-pair.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BuyLimitComponent,
    SellLimitComponent,
    SetValueAddressComponent,
    FactorySwapComponent,
    FactorySwapUpdatePairComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
  ]
})
export class AdminModule { }
