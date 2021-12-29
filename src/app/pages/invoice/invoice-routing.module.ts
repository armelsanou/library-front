import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Invoice',
      status: false
    },
    children: [
      {
        path: 'basic',
        loadChildren: () => import('./basic-invoice/basic-invoice.module').then(m => m.BasicInvoiceModule)
      }, {
        path: 'summary',
        loadChildren: () => import('./summary-invoice/summary-invoice.module').then(m => m.SummaryInvoiceModule)
      }, {
        path: 'list',
        loadChildren: () => import('./list-invoice/list-invoice.module').then(m => m.ListInvoiceModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
