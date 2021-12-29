import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuillEditComponent} from './quill-edit.component';

const routes: Routes = [
  {
    path: '',
    component: QuillEditComponent,
    data: {
      breadcrumb: 'Quill Editor',
      icon: 'icofont-edit bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Quill Editor',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuillEditRoutingModule { }
