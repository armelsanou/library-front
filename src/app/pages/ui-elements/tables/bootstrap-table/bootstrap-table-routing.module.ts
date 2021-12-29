import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Bootstrap Tables',
      status: false
    },
    children: [
      {
        path: 'basic',
        loadChildren: () => import('./basic-bootstrap/basic-bootstrap.module').then(m => m.BasicBootstrapModule)
      }, {
        path: 'sizing',
        loadChildren: () => import('./sizing/sizing.module').then(m => m.SizingModule)
      }, {
        path: 'border',
        loadChildren: () => import('./border/border.module').then(m => m.BorderModule)
      }, {
        path: 'styling',
        loadChildren: () => import('./styling/styling.module').then(m => m.StylingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootstrapTableRoutingModule { }
