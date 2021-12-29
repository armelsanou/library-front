import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotifyComponent} from './notify.component';

const routes: Routes = [
  {
    path: '',
    component: NotifyComponent,
    data: {
      breadcrumb: 'PNOTIFY',
      icon: 'icofont-listine-dots bg-c-pink',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - PNOTIFY',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotifyRoutingModule { }
