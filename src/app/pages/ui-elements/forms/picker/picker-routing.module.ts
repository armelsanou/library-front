import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PickerComponent} from './picker.component';

const routes: Routes = [
  {
    path: '',
    component: PickerComponent,
    data: {
      breadcrumb: 'Form Picker',
      icon: 'icofont-ui-calendar bg-c-pink',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Form Picker',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PickerRoutingModule { }
