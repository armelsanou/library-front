import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiOtherRoutingModule } from './ui-other-routing.module';
import { UiOtherComponent } from './ui-other.component';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    UiOtherRoutingModule,
    SharedModule
  ],
  declarations: [UiOtherComponent]
})
export class UiOtherModule { }
