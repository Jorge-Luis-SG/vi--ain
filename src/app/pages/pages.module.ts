import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { NftComponent } from './nft/nft.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { PagesRoutingModule } from './pages-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { CollectionComponent } from './collection/collection.component';



@NgModule({
  declarations: [
    MarketplaceComponent,
    NftComponent,
    NavBarComponent,
    FooterComponent,
    ProfileComponent,
    CollectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
