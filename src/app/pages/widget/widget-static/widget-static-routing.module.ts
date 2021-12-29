import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WidgetStaticComponent} from './widget-static.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetStaticComponent,
    data: {
      breadcrumb: 'Widget Static',
      icon: 'icofont-speed-meter bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Widget Static',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetStaticRoutingModule { }
