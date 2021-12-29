import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WidgetAdvanceComponent} from './widget-advance.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetAdvanceComponent,
    data: {
      breadcrumb: 'Widget Advanced',
      icon: 'icofont-speed-meter bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Widget Advanced',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetAdvanceRoutingModule { }
