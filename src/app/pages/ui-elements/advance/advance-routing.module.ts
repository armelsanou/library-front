import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvanceComponent} from './advance.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Advance Components',
      status: false
    },
    component: AdvanceComponent,
    children: [
      {
        path: 'modal',
        loadChildren: () => import('./modal/modal.module').then(m => m.ModalModule)
      }, {
        path: 'notifications',
        loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)
      }, {
        path: 'notify',
        loadChildren: () => import('./notify/notify.module').then(m => m.NotifyModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceRoutingModule { }
