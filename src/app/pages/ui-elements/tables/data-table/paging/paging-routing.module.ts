import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagingComponent} from './paging.component';

const routes: Routes = [
  {
    path: '',
    component: PagingComponent,
    data: {
      breadcrumb: 'Table Paging',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Table Paging',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagingRoutingModule { }
