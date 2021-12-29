import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FroalaEditRoutingModule } from './froala-edit-routing.module';
import { FroalaEditComponent } from './froala-edit.component';
import {SharedModule} from '../../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';

@NgModule({
  imports: [
    CommonModule,
    FroalaEditRoutingModule,
    SharedModule,
    FormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  declarations: [FroalaEditComponent]
})
export class FroalaEditModule { }
