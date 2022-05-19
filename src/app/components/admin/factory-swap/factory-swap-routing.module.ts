import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactorySwapComponent } from './factory-swap.component';

const routes: Routes = [
  {
    path: '',
    component: FactorySwapComponent,
},
{
    path: '**',
    pathMatch: 'full',
    redirectTo: '/admin/factory-swap',
}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactorySwapRoutingModule { }
