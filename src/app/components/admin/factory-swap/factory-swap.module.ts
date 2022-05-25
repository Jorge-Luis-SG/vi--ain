import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactorySwapRoutingModule } from './factory-swap-routing.module';
import { FactorySwapComponent } from './factory-swap.component';
import { ListFactorySwapComponent } from './components/list-factory-swap/list-factory-swap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FactorySwapStorePairComponent } from './components/factory-swap-store-pair/factory-swap-store-pair.component';
import { FactorySwapUpdatePairComponent } from './components/factory-swap-update-pair/factory-swap-update-pair.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    FactorySwapComponent,
    ListFactorySwapComponent,
    FactorySwapStorePairComponent,
    FactorySwapUpdatePairComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PipesModule,
    NgxMaskModule.forRoot(),
    FactorySwapRoutingModule
  ]
})
export class FactorySwapModule { }
