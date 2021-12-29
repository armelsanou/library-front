import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorderRoutingModule } from './border-routing.module';
import { BorderComponent } from './border.component';
import {SharedModule} from '../../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BorderRoutingModule,
    SharedModule
  ],
  declarations: [BorderComponent]
})
export class BorderModule { }
