import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsTaskRoutingModule } from './details-task-routing.module';
import { DetailsTaskComponent } from './details-task.component';
import {UiSwitchModule} from 'ng2-ui-switch';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DetailsTaskRoutingModule,
    SharedModule,
    UiSwitchModule
  ],
  declarations: [DetailsTaskComponent]
})
export class DetailsTaskModule { }
