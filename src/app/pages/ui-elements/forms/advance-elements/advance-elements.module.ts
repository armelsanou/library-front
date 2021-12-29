import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvanceElementsRoutingModule } from './advance-elements-routing.module';
import { AdvanceElementsComponent } from './advance-elements.component';
import {SharedModule} from '../../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {TagInputModule} from 'ngx-chips';
import {UiSwitchModule} from 'ng2-ui-switch/dist';

@NgModule({
  imports: [
    CommonModule,
    AdvanceElementsRoutingModule,
    SharedModule,
    FormsModule,
    TagInputModule,
    UiSwitchModule
  ],
  declarations: [AdvanceElementsComponent]
})
export class AdvanceElementsModule { }
