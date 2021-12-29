import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnobRoutingModule } from './knob-routing.module';
import { KnobComponent } from './knob.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    KnobRoutingModule,
    SharedModule
  ],
  declarations: [KnobComponent]
})
export class KnobModule { }
