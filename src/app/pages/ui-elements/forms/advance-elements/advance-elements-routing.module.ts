import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvanceElementsComponent} from './advance-elements.component';

const routes: Routes = [
  {
    path: '',
    component: AdvanceElementsComponent,
    data: {
      breadcrumb: 'Form Elements Advance',
      icon: 'icofont-file-code bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Form Elements Advance',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceElementsRoutingModule { }
