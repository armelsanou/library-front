import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicDatatableRoutingModule } from './basic-datatable-routing.module';
import { BasicDatatableComponent } from './basic-datatable.component';
import {SharedModule} from '../../../../../shared/shared.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    BasicDatatableRoutingModule,
    SharedModule,
    NgxDatatableModule
  ],
  declarations: [BasicDatatableComponent]
})
export class BasicDatatableModule { }
