import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrmContactComponent} from './crm-contact.component';

const routes: Routes = [
  {
    path: '',
    component: CrmContactComponent,
    data: {
      breadcrumb: 'CRM Contact',
      icon: 'icofont-contacts bg-c-pink',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - CRM Contact',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmContactRoutingModule { }
