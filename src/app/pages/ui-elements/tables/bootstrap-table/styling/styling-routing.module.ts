import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StylingComponent} from './styling.component';

const routes: Routes = [
  {
    path: '',
    component: StylingComponent,
    data: {
      breadcrumb: 'Styling Table',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Styling Table',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StylingRoutingModule { }
