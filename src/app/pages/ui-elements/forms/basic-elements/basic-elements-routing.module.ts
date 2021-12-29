import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicElementsComponent} from './basic-elements.component';

const routes: Routes = [
  {
    path: '',
    component: BasicElementsComponent,
    data: {
      breadcrumb: 'General Elements',
      icon: 'icofont-file-code bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - General Elements',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicElementsRoutingModule { }
