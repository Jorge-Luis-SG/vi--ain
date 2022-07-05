import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { NftComponent } from './nft/nft.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    MarketplaceComponent,
    NftComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
