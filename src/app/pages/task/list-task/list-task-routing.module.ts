import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListTaskComponent} from './list-task.component';

const routes: Routes = [
  {
    path: '',
    component: ListTaskComponent,
    data: {
      breadcrumb: 'Task List',
      icon: 'icofont icofont-tasks-alt bg-c-pink',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Task List',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTaskRoutingModule { }
