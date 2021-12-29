import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsTaskComponent} from './details-task.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsTaskComponent,
    data: {
      breadcrumb: 'Task Details',
      icon: 'icofont icofont-tasks-alt bg-c-pink',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Task Details',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsTaskRoutingModule { }
