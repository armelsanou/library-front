import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InlineEditRoutingModule } from './inline-edit-routing.module';
import { InlineEditComponent } from './inline-edit.component';
import {SharedModule} from '../../../../../shared/shared.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    InlineEditRoutingModule,
    SharedModule,
    NgxDatatableModule
  ],
  declarations: [InlineEditComponent]
})
export class InlineEditModule { }
