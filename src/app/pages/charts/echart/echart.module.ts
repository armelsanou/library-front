import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EchartRoutingModule } from './echart-routing.module';
import { EchartComponent } from './echart.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EchartRoutingModule,
    SharedModule,
    NgxEchartsModule
  ],
  declarations: [EchartComponent]
})
export class EchartModule { }
