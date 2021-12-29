import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VectorComponent} from './vector.component';

const routes: Routes = [
  {
    path: '',
    component: VectorComponent,
    data: {
      breadcrumb: 'Vector Map',
      icon: 'icofont-map bg-c-pink',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Vector Map',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VectorRoutingModule { }
