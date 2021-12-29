import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmContactRoutingModule } from './crm-contact-routing.module';
import { CrmContactComponent } from './crm-contact.component';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CrmContactRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    DataTableModule
  ],
  declarations: [CrmContactComponent]
})
export class CrmContactModule { }
