import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Task',
      status: false
    },
    children: [
      {
        path: 'list',
        loadChildren: () => import('./list-task/list-task.module').then(m => m.ListTaskModule)
      }, {
        path: 'board',
        loadChildren: () => import('./board-task/board-task.module').then(m => m.BoardTaskModule)
      }, {
        path: 'details',
        loadChildren: () => import('./details-task/details-task.module').then(m => m.DetailsTaskModule)
      }, {
        path: 'issue',
        loadChildren: () => import('./issue-task/issue-task.module').then(m => m.IssueTaskModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
