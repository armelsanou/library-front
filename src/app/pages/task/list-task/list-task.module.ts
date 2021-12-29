import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListTaskRoutingModule } from './list-task-routing.module';
import { ListTaskComponent } from './list-task.component';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {DataTableModule} from 'angular2-datatable';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ListTaskRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    DataTableModule
  ],
  declarations: [ListTaskComponent]
})
export class ListTaskModule { }
