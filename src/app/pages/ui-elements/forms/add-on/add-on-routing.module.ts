import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddOnComponent} from './add-on.component';

const routes: Routes = [
  {
    path: '',
    component: AddOnComponent,
    data: {
      breadcrumb: 'Form Elements Add-On',
      icon: 'icofont-file-code bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Form Elements Add-On',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddOnRoutingModule { }
