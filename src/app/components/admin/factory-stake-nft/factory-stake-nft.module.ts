import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactoryStakeNftRoutingModule } from './factory-stake-nft-routing.module';
import { FactoryStakeNftComponent } from './factory-stake-nft.component';
import { ListFactoryStakeNftComponent } from './components/list-factory-stake-nft/list-factory-stake-nft.component';
import { FactoryStakeNftStoreComponent } from './components/factory-stake-nft-store/factory-stake-nft-store.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FactoryStakeNftComponent,
    ListFactoryStakeNftComponent,
    FactoryStakeNftStoreComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PipesModule,
    FactoryStakeNftRoutingModule
  ]
})
export class FactoryStakeNftModule { }
