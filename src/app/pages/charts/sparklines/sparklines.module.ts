import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SparklinesRoutingModule } from './sparklines-routing.module';
import { SparklinesComponent } from './sparklines.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SparklinesRoutingModule,
    SharedModule
  ],
  declarations: [SparklinesComponent]
})
export class SparklinesModule { }
