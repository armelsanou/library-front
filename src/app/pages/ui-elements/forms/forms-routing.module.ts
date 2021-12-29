import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsComponent} from './forms.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Form Components',
      status: false
    },
    component: FormsComponent,
    children: [
      {
        path: 'basic-elements',
        loadChildren: () => import('./basic-elements/basic-elements.module').then(m => m.BasicElementsModule)
      }, {
        path: 'add-on',
        loadChildren: () => import('./add-on/add-on.module').then(m => m.AddOnModule)
      }, {
        path: 'advance-elements',
        loadChildren: () => import('./advance-elements/advance-elements.module').then(m => m.AdvanceElementsModule)
      }, {
        path: 'form-validation',
        loadChildren: () => import('./form-validation/form-validation.module').then(m => m.FormValidationModule)
      }, {
        path: 'picker',
        loadChildren: () => import('./picker/picker.module').then(m => m.PickerModule)
      }, {
        path: 'select',
        loadChildren: () => import('./select-form/select-form.module').then(m => m.SelectFormModule)
      }, {
        path: 'masking',
        loadChildren: () => import('./masking/masking.module').then(m => m.MaskingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
