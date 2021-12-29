import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardProjectComponent} from './dashboard-project.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardProjectComponent,
    data: {
      breadcrumb: 'Project',
      icon: 'icofont-home bg-c-blue',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardProjectRoutingModule { }
