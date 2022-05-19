import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactoryStakeTokenRoutingModule } from './factory-stake-token-routing.module';
import { FactoryStakeTokenComponent } from './factory-stake-token.component';
import { ListFactoryStakeTokenComponent } from './components/list-factory-stake-token/list-factory-stake-token.component';
import { FactoryStakeTokenStoreComponent } from './components/factory-stake-token-store/factory-stake-token-store.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    FactoryStakeTokenComponent,
    ListFactoryStakeTokenComponent,
    FactoryStakeTokenStoreComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PipesModule,
    FactoryStakeTokenRoutingModule
  ]
})
export class FactoryStakeTokenModule { }
