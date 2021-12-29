import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetChartRoutingModule } from './widget-chart-routing.module';
import { WidgetChartComponent } from './widget-chart.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    WidgetChartRoutingModule,
    SharedModule
  ],
  declarations: [WidgetChartComponent]
})
export class WidgetChartModule { }
