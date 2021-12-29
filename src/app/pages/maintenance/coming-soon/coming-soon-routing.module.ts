import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComingSoonComponent} from './coming-soon.component';

const routes: Routes = [
  {
    path: '',
    component: ComingSoonComponent,
    data: {
      breadcrumb: 'Coming Soon',
      icon: 'icofont-listine-dots bg-c-pink',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Coming Soon',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComingSoonRoutingModule { }
