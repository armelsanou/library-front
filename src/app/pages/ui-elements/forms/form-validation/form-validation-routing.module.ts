import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormValidationComponent} from './form-validation.component';

const routes: Routes = [
  {
    path: '',
    component: FormValidationComponent,
    data: {
      breadcrumb: 'Form Validation',
      icon: 'icofont-file-code bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Form Validation',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormValidationRoutingModule { }
