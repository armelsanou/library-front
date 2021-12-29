import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeityRoutingModule } from './peity-routing.module';
import { PeityComponent } from './peity.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PeityRoutingModule,
    SharedModule
  ],
  declarations: [PeityComponent]
})
export class PeityModule { }
