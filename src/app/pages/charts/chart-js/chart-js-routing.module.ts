import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChartJsComponent} from './chart-js.component';

const routes: Routes = [
  {
    path: '',
    component: ChartJsComponent,
    data: {
      breadcrumb: 'ChartJS Chart',
      icon: 'icofont-chart-bar-graph bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - ChartJS Chart',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartJsRoutingModule { }
