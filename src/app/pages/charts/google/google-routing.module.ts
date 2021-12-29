import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoogleComponent} from './google.component';

const routes: Routes = [
  {
    path: '',
    component: GoogleComponent,
    data: {
      breadcrumb: 'Google Chart',
      icon: 'icofont-chart-bar-graph bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Google Chart',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleRoutingModule { }
