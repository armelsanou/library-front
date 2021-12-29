import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetAdvanceRoutingModule } from './widget-advance-routing.module';
import { WidgetAdvanceComponent } from './widget-advance.component';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    WidgetAdvanceRoutingModule,
    SharedModule,
    ChartModule
  ],
  declarations: [WidgetAdvanceComponent]
})
export class WidgetAdvanceModule { }
