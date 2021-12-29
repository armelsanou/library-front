import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WidgetChartComponent} from './widget-chart.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetChartComponent,
    data: {
      breadcrumb: 'Widget Chart',
      icon: 'icofont-speed-meter bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Widget Chart',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetChartRoutingModule { }
