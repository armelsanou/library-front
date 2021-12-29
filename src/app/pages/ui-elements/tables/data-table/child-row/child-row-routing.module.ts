import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChildRowComponent} from './child-row.component';

const routes: Routes = [
  {
    path: '',
    component: ChildRowComponent,
    data: {
      breadcrumb: 'Row Details',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Row Details',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRowRoutingModule { }
