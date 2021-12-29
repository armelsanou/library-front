import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LabelBadgeComponent} from './label-badge.component';

const routes: Routes = [
  {
    path: '',
    component: LabelBadgeComponent,
    data: {
      breadcrumb: 'Label Badge',
      icon: 'icofont-layout bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Label Badge',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabelBadgeRoutingModule { }
