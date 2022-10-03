import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { PagesRoutingModule } from './pages-routing.module';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { PipesModule } from '../pipes/pipes.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule,
    ClipboardModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
