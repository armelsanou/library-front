import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModalComponent} from './modal.component';

const routes: Routes = [
  {
    path: '',
    component: ModalComponent,
    data: {
      breadcrumb: 'Modal',
      icon: 'icofont-listine-dots bg-c-pink',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Modal',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalRoutingModule { }
