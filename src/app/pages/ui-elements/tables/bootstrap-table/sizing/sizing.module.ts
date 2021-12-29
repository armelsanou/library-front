import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SizingRoutingModule } from './sizing-routing.module';
import { SizingComponent } from './sizing.component';
import {SharedModule} from '../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SizingRoutingModule,
    SharedModule
  ],
  declarations: [SizingComponent]
})
export class SizingModule { }
