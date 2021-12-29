import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FileUploadUiComponent} from './file-upload-ui.component';

const routes: Routes = [
  {
    path: '',
    component: FileUploadUiComponent,
    data: {
      breadcrumb: 'File Upload',
      icon: 'icofont-upload-alt bg-c-lite-green',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - File Upload',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileUploadUiRoutingModule { }
