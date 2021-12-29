import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IssueTaskComponent} from './issue-task.component';

const routes: Routes = [
  {
    path: '',
    component: IssueTaskComponent,
    data: {
      breadcrumb: 'Task Issue',
      icon: 'icofont icofont-tasks-alt bg-c-pink',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Task Issue',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssueTaskRoutingModule { }
