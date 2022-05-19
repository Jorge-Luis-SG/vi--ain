import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactoryStakeNftComponent } from './factory-stake-nft.component';

const routes: Routes = [
  {
    path: '',
    component: FactoryStakeNftComponent,
  },
  {
      path: '**',
      pathMatch: 'full',
      redirectTo: '/admin/factory-stake-nft',
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactoryStakeNftRoutingModule { }
