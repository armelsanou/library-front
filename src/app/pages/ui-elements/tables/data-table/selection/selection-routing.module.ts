import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SelectionComponent} from './selection.component';

const routes: Routes = [
  {
    path: '',
    component: SelectionComponent,
    data: {
      breadcrumb: 'Selection Table',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Selection Table',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectionRoutingModule { }
