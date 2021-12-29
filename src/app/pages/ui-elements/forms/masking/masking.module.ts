import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaskingRoutingModule } from './masking-routing.module';
import { MaskingComponent } from './masking.component';
import {SharedModule} from '../../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {CurrencyMaskModule} from 'ng2-currency-mask';

@NgModule({
  imports: [
    CommonModule,
    MaskingRoutingModule,
    SharedModule,
    FormsModule,
    CurrencyMaskModule
  ],
  declarations: [MaskingComponent]
})
export class MaskingModule { }
