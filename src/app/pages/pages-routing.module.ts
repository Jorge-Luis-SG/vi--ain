import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { NftComponent } from './nft/nft.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
        path: 'marketplace',
        component: MarketplaceComponent,
    },
    {
        path: 'collection/:smartContract/:index',
        component: CollectionComponent,
    },
    {
        path: 'nft/:smartContract/:tokenData',
        component: NftComponent,
    },
    {
        path: 'profile',
        component: ProfileComponent,
    },
    {
        path: '',
        redirectTo: '/pages/marketplace',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
