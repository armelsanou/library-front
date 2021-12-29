import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OtherDatatableComponent} from './other-datatable.component';

const routes: Routes = [
  {
    path: '',
    component: OtherDatatableComponent,
    data: {
      breadcrumb: 'Other',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Other',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherDatatableRoutingModule { }
