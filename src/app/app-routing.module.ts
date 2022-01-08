import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { BibliothequeComponent } from './layout/bibliotheque/bibliotheque.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      }, {
        path: 'widget',
        loadChildren: () => import('./pages/widget/widget.module').then(m => m.WidgetModule)
      }, {
        path: 'basic',
        loadChildren: () => import('./pages/ui-elements/basic/basic.module').then(m => m.BasicModule)
      }, {
        path: 'advance',
        loadChildren: () => import('./pages/ui-elements/advance/advance.module').then(m => m.AdvanceModule)
      }, {
        path: 'animations',
        loadChildren: () => import('./pages/animations/animations.module').then(m => m.AnimationsModule)
      }, {
        path: 'forms',
        loadChildren: () => import('./pages/ui-elements/forms/forms.module').then(m => m.FormsModule)
      }, {
        path: 'bootstrap-table',
        loadChildren: () => import('./pages/ui-elements/tables/bootstrap-table/bootstrap-table.module').then(m => m.BootstrapTableModule),
      }, {
        path: 'data-table',
        loadChildren: () => import('./pages/ui-elements/tables/data-table/data-table.module').then(m => m.DataTableModule),
      }, {
        path: 'charts',
        loadChildren: () => import('./pages/charts/charts.module').then(m => m.ChartsModule),
      }, {
        path: 'map',
        loadChildren: () => import('./pages/map/map.module').then(m => m.MapModule),
      }, {
        path: 'maintenance/error',
        loadChildren: () => import('./pages/maintenance/error/error.module').then(m => m.ErrorModule)
      }, {
        path: 'maintenance/coming-soon',
        loadChildren: () => import('./pages/maintenance/coming-soon/coming-soon.module').then(m => m.ComingSoonModule)
      }, {
        path: 'user',
        loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
      }, {
        path: 'crm-contact',
        loadChildren: () => import('./pages/ui-elements/crm-contact/crm-contact.module').then(m => m.CrmContactModule)
      }, {
        path: 'task',
        loadChildren: () => import('./pages/task/task.module').then(m => m.TaskModule)
      }, {
        path: 'editor',
        loadChildren: () => import('./pages/ui-elements/editor/editor.module').then(m => m.EditorModule)
      }, {
        path: 'invoice',
        loadChildren: () => import('./pages/invoice/invoice.module').then(m => m.InvoiceModule)
      }, {
        path: 'file-upload',
        loadChildren: () => import('./pages/ui-elements/file-upload-ui/file-upload-ui.module').then(m => m.FileUploadUiModule)
      }, {
        path: 'change-log',
        loadChildren: () => import('./pages/change-log/change-log.module').then(m => m.ChangeLogModule)
      }, {
        path: 'simple-page',
        loadChildren: () => import('./pages/simple-page/simple-page.module').then(m => m.SimplePageModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      }, {
        path: 'maintenance/offline-ui',
        loadChildren: () => import('./pages/maintenance/offline-ui/offline-ui.module').then(m => m.OfflineUiModule)
      }, {
        path: 'components',
        loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
      }
    ]
  },
  {
    path: '',
    component: BibliothequeComponent,
    children: [
      {
        path: 'gestion-bibliotheque',
        loadChildren: () => import('./pages/gestion-bibliotheque/gestion-bibliotheque.module').then(m => m.GestionBibliothequeModule)
      }
    ]
  },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
