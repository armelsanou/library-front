import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueTaskRoutingModule } from './issue-task-routing.module';
import { IssueTaskComponent } from './issue-task.component';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {DataTableModule} from 'angular2-datatable';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    IssueTaskRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    DataTableModule
  ],
  declarations: [IssueTaskComponent]
})
export class IssueTaskModule { }
