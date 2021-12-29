import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Map',
      status: false
    },
    children: [
      {
        path: 'google',
        loadChildren: () => import('./google-map/google-map.module').then(m => m.GoogleMapModule)
      }, {
        path: 'vector',
        loadChildren: () => import('./vector/vector.module').then(m => m.VectorModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
