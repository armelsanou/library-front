import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SizingComponent} from './sizing.component';

const routes: Routes = [
  {
    path: '',
    component: SizingComponent,
    data: {
      breadcrumb: 'Sizing Table',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Sizing Table',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SizingRoutingModule { }
