import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabelBadgeRoutingModule } from './label-badge-routing.module';
import { LabelBadgeComponent } from './label-badge.component';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LabelBadgeRoutingModule,
    SharedModule
  ],
  declarations: [LabelBadgeComponent]
})
export class LabelBadgeModule { }
