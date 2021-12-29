import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Editor',
      status: false
    },
    children: [
      {
        path: 'froala',
        loadChildren: () => import('./froala-edit/froala-edit.module').then(m => m.FroalaEditModule)
      }, {
        path: 'tinymce',
        loadChildren: () => import('./quill-edit/quill-edit.module').then(m => m.QuillEditModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
