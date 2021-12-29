import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagingRoutingModule } from './paging-routing.module';
import { PagingComponent } from './paging.component';
import {SharedModule} from '../../../../../shared/shared.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    PagingRoutingModule,
    SharedModule,
    NgxDatatableModule
  ],
  declarations: [PagingComponent]
})
export class PagingModule { }
