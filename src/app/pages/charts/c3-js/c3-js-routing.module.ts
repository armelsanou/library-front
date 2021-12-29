import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {C3JsComponent} from './c3-js.component';

const routes: Routes = [
  {
    path: '',
    component: C3JsComponent,
    data: {
      breadcrumb: 'C3 Chart',
      icon: 'icofont-chart-bar-graph bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - C3 Chart',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C3JsRoutingModule { }
