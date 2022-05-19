import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactorySwapRoutingModule } from './factory-swap-routing.module';
import { FactorySwapComponent } from './factory-swap.component';
import { ListFactorySwapComponent } from './components/list-factory-swap/list-factory-swap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FactorySwapStorePairComponent } from './components/factory-swap-store-pair/factory-swap-store-pair.component';


@NgModule({
  declarations: [
    FactorySwapComponent,
    ListFactorySwapComponent,
    FactorySwapStorePairComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PipesModule,
    FactorySwapRoutingModule
  ]
})
export class FactorySwapModule { }
