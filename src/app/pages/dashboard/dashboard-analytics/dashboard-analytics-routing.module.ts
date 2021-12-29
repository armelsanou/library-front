import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardAnalyticsComponent} from './dashboard-analytics.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardAnalyticsComponent,
    data: {
      breadcrumb: 'Analytics',
      icon: 'icofont-home bg-c-blue',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAnalyticsRoutingModule { }
