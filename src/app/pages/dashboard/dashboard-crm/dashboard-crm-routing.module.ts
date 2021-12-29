import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardCrmComponent} from './dashboard-crm.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardCrmComponent,
    data: {
      breadcrumb: 'CRM',
      icon: 'icofont-home bg-c-blue',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardCrmRoutingModule { }
