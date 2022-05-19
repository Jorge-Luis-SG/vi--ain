import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactoryPoolComponent } from './factory-pool.component';

const routes: Routes = [
  {
    path: '',
    component: FactoryPoolComponent,
  },
  {
      path: '**',
      pathMatch: 'full',
      redirectTo: '/admin/factory-pool',
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactoryPoolRoutingModule { }
