import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WidgetComponent} from './widget.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetComponent,
    data: {
      breadcrumb: 'Widget',
      icon: 'icofont-speed-meter bg-c-blue',
      status: false
    },
    children: [
      {
        path: 'static',
        loadChildren: () => import('./widget-static/widget-static.module').then(m => m.WidgetStaticModule)
      },
      {
        path: 'data',
        loadChildren: () => import('./widget-data/widget-data.module').then(m => m.WidgetDataModule)
      },
      {
        path: 'chart',
        loadChildren: () => import('./widget-chart/widget-chart.module').then(m => m.WidgetChartModule)
      },
      {
        path: 'advanced',
        loadChildren: () => import('./widget-advance/widget-advance.module').then(m => m.WidgetAdvanceModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetRoutingModule { }
