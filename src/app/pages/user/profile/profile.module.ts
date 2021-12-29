import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {DataTableModule} from 'angular2-datatable';
import {NgxEchartsModule} from 'ngx-echarts';
import {HttpClientModule} from '@angular/common/http';
import {TinymceModule} from 'angular2-tinymce';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule,
    TinymceModule,
    HttpClientModule,
    DataTableModule,
    NgxEchartsModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
