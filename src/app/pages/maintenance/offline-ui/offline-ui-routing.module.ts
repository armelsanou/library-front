import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OfflineUiComponent} from './offline-ui.component';

const routes: Routes = [
  {
    path: '',
    component: OfflineUiComponent,
    data: {
      breadcrumb: 'Offline UI'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfflineUiRoutingModule { }
