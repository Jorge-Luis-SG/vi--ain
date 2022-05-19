import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactoryPoolRoutingModule } from './factory-pool-routing.module';
import { FactoryPoolComponent } from './factory-pool.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FactoryPoolStoreComponent } from './components/factory-pool-store/factory-pool-store.component';
import { FactoryPoolUpdateComponent } from './components/factory-pool-update/factory-pool-update.component';
import { ListFactoryPoolComponent } from './components/list-factory-pool/list-factory-pool.component';


@NgModule({
  declarations: [
    FactoryPoolComponent,
    FactoryPoolStoreComponent,
    FactoryPoolUpdateComponent,
    ListFactoryPoolComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PipesModule,
    FactoryPoolRoutingModule
  ]
})
export class FactoryPoolModule { }
