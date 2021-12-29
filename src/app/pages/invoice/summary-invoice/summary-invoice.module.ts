import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryInvoiceRoutingModule } from './summary-invoice-routing.module';
import { SummaryInvoiceComponent } from './summary-invoice.component';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    SummaryInvoiceRoutingModule,
    SharedModule,
    ChartModule
  ],
  declarations: [SummaryInvoiceComponent]
})
export class SummaryInvoiceModule { }
