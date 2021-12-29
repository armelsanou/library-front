import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UiOtherComponent} from './ui-other.component';

const routes: Routes = [
  {
    path: '',
    component: UiOtherComponent,
    data: {
      breadcrumb: 'Other',
      icon: 'icofont-layout bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Other',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiOtherRoutingModule { }
