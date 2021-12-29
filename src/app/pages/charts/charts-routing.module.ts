import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Chart',
      status: false
    },
    children: [
      {
        path: 'google',
        loadChildren: () => import('./google/google.module').then(m => m.GoogleModule)
      }, {
        path: 'chart-js',
        loadChildren: () => import('./chart-js/chart-js.module').then(m => m.ChartJsModule)
      }, {
        path: 'knob',
        loadChildren: () => import('./knob/knob.module').then(m => m.KnobModule)
      }, {
        path: 'echart',
        loadChildren: () => import('./echart/echart.module').then(m => m.EchartModule)
      }, {
        path: 'peity',
        loadChildren: () => import('./peity/peity.module').then(m => m.PeityModule)
      }, {
        path: 'radial',
        loadChildren: () => import('./radial/radial.module').then(m => m.RadialModule)
      }, {
        path: 'sparklines',
        loadChildren: () => import('./sparklines/sparklines.module').then(m => m.SparklinesModule)
      }, {
        path: 'c3-js',
        loadChildren: () => import('./c3-js/c3-js.module').then(m => m.C3JsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
