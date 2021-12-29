import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WidgetDataComponent} from './widget-data.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetDataComponent,
    data: {
      breadcrumb: 'Widget Data',
      icon: 'icofont-speed-meter bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Widget Data',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetDataRoutingModule { }
