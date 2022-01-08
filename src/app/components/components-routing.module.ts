import { ProfileLecteurComponent } from './profile-lecteur/profile-lecteur.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { ComponentsComponent } from './components.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LivreComponent } from './livre/livre.component';
import { LivreDetailsComponent } from './livre-details/livre-details.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Module',
      status: false
    },
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
        loadChildren: () => import('./components.module').then(m => m.ComponentsModule)
      },
      {
        path: 'home',
        data: {
          breadcrumb: 'Home',
          icon: 'icofont-maximize bg-c-yellow',
          breadcrumb_caption: 'Utilisateurs',
          status: true
        },
        component: HomeComponent
      },
      {
        path: 'abonnement',
        data: {
          breadcrumb: 'Abonnements disponibles',
          icon: 'icofont-maximize bg-c-yellow',
          breadcrumb_caption: 'Abonnements',
          status: true
        },
        component: AbonnementComponent
      },
      {
        path: 'my-profile',
        data: {
          breadcrumb: 'My profile',
          icon: 'icofont-maximize bg-c-yellow',
          breadcrumb_caption: 'See or edit my profile',
          status: true
        },
        component: ProfileLecteurComponent
      },
      {
        path: 'livres/categorie/:id',
        data: {
          breadcrumb: 'Livres disponibles',
          icon: 'icofont-maximize bg-c-yellow',
          breadcrumb_caption: 'Livres à votre disposition',
          status: true
        },
        component: LivreComponent
      },
      {
        path: 'livre/:id',
        data: {
          breadcrumb: 'Détails du livre',
          icon: 'icofont-maximize bg-c-yellow',
          breadcrumb_caption: 'Informations sur le livre',
          status: true
        },
        component: LivreDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
