import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactoryStakeTokenComponent } from './factory-stake-token.component';

const routes: Routes = [
  {
    path: '',
    component: FactoryStakeTokenComponent,
  },
  {
      path: '**',
      pathMatch: 'full',
      redirectTo: '/admin/factory-stake-token',
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactoryStakeTokenRoutingModule { }
