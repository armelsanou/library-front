import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherDatatableRoutingModule } from './other-datatable-routing.module';
import { OtherDatatableComponent } from './other-datatable.component';
import {SharedModule} from '../../../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {DataTableModule} from 'angular2-datatable';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    OtherDatatableRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    DataTableModule
  ],
  declarations: [OtherDatatableComponent]
})
export class OtherDatatableModule { }
