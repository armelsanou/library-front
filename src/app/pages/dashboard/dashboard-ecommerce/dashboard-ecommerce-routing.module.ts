import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardEcommerceComponent} from './dashboard-ecommerce.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardEcommerceComponent,
    data: {
      breadcrumb: 'Ecommerce',
      icon: 'icofont-home bg-c-blue',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardEcommerceRoutingModule { }
