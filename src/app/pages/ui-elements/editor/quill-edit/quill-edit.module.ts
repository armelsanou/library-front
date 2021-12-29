import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuillEditRoutingModule } from './quill-edit-routing.module';
import { QuillEditComponent } from './quill-edit.component';
import {SharedModule} from '../../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {TinymceModule} from 'angular2-tinymce';

@NgModule({
  imports: [
    CommonModule,
    QuillEditRoutingModule,
    SharedModule,
    FormsModule,
    TinymceModule
  ],
  declarations: [QuillEditComponent]
})
export class QuillEditModule { }
