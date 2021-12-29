import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicInvoiceComponent} from './basic-invoice.component';

const routes: Routes = [
  {
    path: '',
    component: BasicInvoiceComponent,
    data: {
      breadcrumb: 'Invoice',
      icon: 'icofont-chart-histogram bg-c-blue',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicInvoiceRoutingModule { }
