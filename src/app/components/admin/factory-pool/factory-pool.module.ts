import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactoryPoolRoutingModule } from './factory-pool-routing.module';
import { FactoryPoolComponent } from './factory-pool.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    FactoryPoolComponent
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
