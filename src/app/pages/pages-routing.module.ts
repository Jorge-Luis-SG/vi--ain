import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { NftComponent } from './nft/nft.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
        path: 'marketplace',
        component: MarketplaceComponent,
    },
    {
        path: 'nft/:id',
        component: NftComponent,
    }, {
        path: 'Profile',
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
