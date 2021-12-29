import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlertComponent} from './alert.component';

const routes: Routes = [
  {
    path: '',
    component: AlertComponent,
    data: {
      breadcrumb: 'Alert',
      icon: 'icofont-layout bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Alert',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertRoutingModule { }
