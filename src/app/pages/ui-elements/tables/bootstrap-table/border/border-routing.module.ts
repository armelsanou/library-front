import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BorderComponent} from './border.component';

const routes: Routes = [
  {
    path: '',
    component: BorderComponent,
    data: {
      breadcrumb: 'Border Table',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Border Table',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorderRoutingModule { }
