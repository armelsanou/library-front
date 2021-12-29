import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChangeLogComponent} from './change-log.component';

const routes: Routes = [
  {
    path: '',
    component: ChangeLogComponent,
    data: {
      breadcrumb: 'Change Log',
      icon: 'icofont-social-blogger bg-c-green',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Change Log',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeLogRoutingModule { }
