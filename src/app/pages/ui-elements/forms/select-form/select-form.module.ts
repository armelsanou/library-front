import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectFormRoutingModule } from './select-form-routing.module';
import { SelectFormComponent } from './select-form.component';
import {SharedModule} from '../../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {SelectModule} from 'ng-select';
import {TagInputModule} from 'ngx-chips';
import {SelectOptionService} from '../../../../shared/element/select-option.service';

@NgModule({
  imports: [
    CommonModule,
    SelectFormRoutingModule,
    SharedModule,
    FormsModule,
    SelectModule,
    TagInputModule,
  ],
  declarations: [SelectFormComponent],
  providers: [SelectOptionService]
})
export class SelectFormModule { }
