import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StylingRoutingModule } from './styling-routing.module';
import { StylingComponent } from './styling.component';
import {SharedModule} from '../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    StylingRoutingModule,
    SharedModule
  ],
  declarations: [StylingComponent]
})
export class StylingModule { }
