import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Registration',
      status: false
    },
    children: [
      {
        path: 'simple',
        loadChildren: () => import('./basic-reg/basic-reg.module').then(m => m.BasicRegModule)
      },
      {
        path: 'header-footer',
        loadChildren: () => import('./header-footer-reg/header-footer-reg.module').then(m => m.HeaderFooterRegModule)
      },
      {
        path: 'social',
        loadChildren: () => import('./social-reg/social-reg.module').then(m => m.SocialRegModule)
      },
      {
        path: 'social-header-footer',
        loadChildren: () => import('./social-header-footer-reg/social-header-footer-reg.module').then(m => m.SocialHeaderFooterRegModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }



