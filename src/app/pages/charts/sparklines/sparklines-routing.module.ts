import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SparklinesComponent} from './sparklines.component';

const routes: Routes = [
  {
    path: '',
    component: SparklinesComponent,
    data: {
      breadcrumb: 'Sparklines Chart',
      icon: 'icofont-chart-bar-graph bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Sparklines Chart',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SparklinesRoutingModule { }
