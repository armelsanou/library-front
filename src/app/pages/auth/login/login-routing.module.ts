import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Login',
      status: false
    },
    children: [
      {
        path: 'simple',
        loadChildren: () => import('./basic-login/basic-login.module').then(m => m.BasicLoginModule)
      },
      {
        path: 'header-footer',
        loadChildren: () => import('./header-footer-login/header-footer-login.module').then(m => m.HeaderFooterLoginModule)
      },
      {
        path: 'social',
        loadChildren: () => import('./social-login/social-login.module').then(m => m.SocialLoginModule)
      },
      {
        path: 'social-header-footer',
        loadChildren: () => import('./social-header-footer-login/social-header-footer-login.module').then(m => m.SocialHeaderFooterLoginModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
