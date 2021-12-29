import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Data Tables',
      status: false
    },
    children: [
      {
        path: 'basic',
        loadChildren: () => import('./basic-datatable/basic-datatable.module').then(m => m.BasicDatatableModule)
      }, {
        path: 'editable',
        loadChildren: () => import('./inline-edit/inline-edit.module').then(m => m.InlineEditModule)
      }, {
        path: 'row-details',
        loadChildren: () => import('./child-row/child-row.module').then(m => m.ChildRowModule)
      }, {
        path: 'paging',
        loadChildren: () => import('./paging/paging.module').then(m => m.PagingModule)
      }, {
        path: 'selection',
        loadChildren: () => import('./selection/selection.module').then(m => m.SelectionModule)
      }, {
        path: 'other',
        loadChildren: () => import('./other-datatable/other-datatable.module').then(m => m.OtherDatatableModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTableRoutingModule { }
