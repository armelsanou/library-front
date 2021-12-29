import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadUiRoutingModule } from './file-upload-ui-routing.module';
import { FileUploadUiComponent } from './file-upload-ui.component';
import {SharedModule} from '../../../shared/shared.module';
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FileUploadUiRoutingModule,
    SharedModule,
    FileUploadModule
  ],
  declarations: [FileUploadUiComponent]
})
export class FileUploadUiModule { }
