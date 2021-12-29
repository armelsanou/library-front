import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SelectFormComponent} from './select-form.component';

const routes: Routes = [
  {
    path: '',
    component: SelectFormComponent,
    data: {
      breadcrumb: 'Form Select',
      icon: 'icofont-file-alt bg-c-yellow',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Form Select',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectFormRoutingModule { }
