import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListInvoiceRoutingModule } from './list-invoice-routing.module';
import { ListInvoiceComponent } from './list-invoice.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ListInvoiceRoutingModule,
    SharedModule
  ],
  declarations: [ListInvoiceComponent]
})
export class ListInvoiceModule { }
