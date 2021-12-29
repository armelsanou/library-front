import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'default',
        loadChildren: () => import('./dashboard-default/dashboard-default.module').then(m => m.DashboardDefaultModule)
      },
      {
        path: 'ecommerce',
        loadChildren: () => import('./dashboard-ecommerce/dashboard-ecommerce.module').then(m => m.DashboardEcommerceModule)
      },
      {
        path: 'crm',
        loadChildren: () => import('./dashboard-crm/dashboard-crm.module').then(m => m.DashboardCrmModule)
      },
      {
        path: 'analytics',
        loadChildren: () => import('./dashboard-analytics/dashboard-analytics.module').then(m => m.DashboardAnalyticsModule)
      },
      {
        path: 'project',
        loadChildren: () => import('./dashboard-project/dashboard-project.module').then(m => m.DashboardProjectModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
