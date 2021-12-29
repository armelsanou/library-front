import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaskingComponent} from './masking.component';

const routes: Routes = [
  {
    path: '',
    component: MaskingComponent,
    data: {
      breadcrumb: 'Form Masking',
      icon: 'icofont-file-alt bg-c-lite-green',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Form Masking',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaskingRoutingModule { }
