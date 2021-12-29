import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KnobComponent} from './knob.component';

const routes: Routes = [
  {
    path: '',
    component: KnobComponent,
    data: {
      breadcrumb: 'Knob Chart',
      icon: 'icofont-chart-bar-graph bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Knob Chart',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnobRoutingModule { }
