import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadialRoutingModule } from './radial-routing.module';
import { RadialComponent } from './radial.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RadialRoutingModule,
    SharedModule
  ],
  declarations: [RadialComponent]
})
export class RadialModule { }
