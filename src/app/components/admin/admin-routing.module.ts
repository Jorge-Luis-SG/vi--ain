import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    loadChildren: () => import('./factory-swap/factory-swap-routing.module').then(m => m.FactorySwapRoutingModule)
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
