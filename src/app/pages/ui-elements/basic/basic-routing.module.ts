import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Basic Components',
      status: false
    },
    children: [
      {
        path: 'alert',
        loadChildren: () => import('./alert/alert.module').then(m => m.AlertModule)
      }, {
        path: 'breadcrumb',
        loadChildren: () => import('./breadcrumb/breadcrumb.module').then(m => m.BreadcrumbModule)
      }, {
        path: 'button',
        loadChildren: () => import('./button/button.module').then(m => m.ButtonModule)
      }, {
        path: 'accordion',
        loadChildren: () => import('./accordion/accordion.module').then(m => m.AccordionModule)
      }, {
        path: 'generic-class',
        loadChildren: () => import('./generic-class/generic-class.module').then(m => m.GenericClassModule)
      }, {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule)
      }, {
        path: 'label-badge',
        loadChildren: () => import('./label-badge/label-badge.module').then(m => m.LabelBadgeModule)
      }, {
        path: 'typography',
        loadChildren: () => import('./typography/typography.module').then(m => m.TypographyModule)
      }, {
        path: 'other',
        loadChildren: () => import('./ui-other/ui-other.module').then(m => m.UiOtherModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
