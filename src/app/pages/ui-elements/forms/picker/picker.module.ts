import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PickerRoutingModule } from './picker-routing.module';
import { PickerComponent } from './picker.component';
import {SharedModule} from '../../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {ColorPickerModule} from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    PickerRoutingModule,
    SharedModule,
    FormsModule,
    ColorPickerModule
  ],
  declarations: [PickerComponent]
})
export class PickerModule { }
