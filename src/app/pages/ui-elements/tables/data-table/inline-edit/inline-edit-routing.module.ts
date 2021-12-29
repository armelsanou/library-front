import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InlineEditComponent} from './inline-edit.component';

const routes: Routes = [
  {
    path: '',
    component: InlineEditComponent,
    data: {
      breadcrumb: 'Editable',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Editable',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InlineEditRoutingModule { }
