import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SummaryInvoiceComponent} from './summary-invoice.component';

const routes: Routes = [
  {
    path: '',
    component: SummaryInvoiceComponent,
    data: {
      breadcrumb: 'Invoice Summary',
      icon: 'icofont-chart-histogram bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Invoice Summary',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryInvoiceRoutingModule { }
