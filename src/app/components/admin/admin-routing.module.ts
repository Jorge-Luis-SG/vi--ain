import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckWeb3ConnectionGuard } from 'src/app/guards/check-web3-connection.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'security',
    loadChildren: () => import('./security/security-routing.module').then(m => m.SecurityRoutingModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract-routing.module').then(m => m.ContractRoutingModule)
  },
  {
    path: 'factory-swap',
    // canActivate: [ CheckWeb3ConnectionGuard ],
    loadChildren: () => import('./factory-swap/factory-swap-routing.module').then(m => m.FactorySwapRoutingModule)
  },
  {
    path: 'factory-pool',
    loadChildren: () => import('./factory-pool/factory-pool-routing.module').then(m => m.FactoryPoolRoutingModule)
  },
  {
    path: 'factory-stake-token',
    loadChildren: () => import('./factory-stake-token/factory-stake-token-routing.module').then(m => m.FactoryStakeTokenRoutingModule)
  },
  {
    path: 'factory-stake-nft',
    loadChildren: () => import('./factory-stake-nft/factory-stake-nft-routing.module').then(m => m.FactoryStakeNftRoutingModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/admin/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
