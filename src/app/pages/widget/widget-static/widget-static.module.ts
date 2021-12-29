import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetStaticRoutingModule } from './widget-static-routing.module';
import { WidgetStaticComponent } from './widget-static.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    WidgetStaticRoutingModule,
    SharedModule
  ],
  declarations: [WidgetStaticComponent]
})
export class WidgetStaticModule { }
