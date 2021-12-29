import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardTaskComponent} from './board-task.component';

const routes: Routes = [
  {
    path: '',
    component: BoardTaskComponent,
    data: {
      breadcrumb: 'Task Board',
      icon: 'icofont icofont-tasks-alt bg-c-pink',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Task Board',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardTaskRoutingModule { }
