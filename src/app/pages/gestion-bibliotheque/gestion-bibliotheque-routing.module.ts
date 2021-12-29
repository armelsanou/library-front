import { LecteurComponent } from './lecteur/lecteur.component';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { AbonnementEffectueComponent } from './abonnement-effectue/abonnement-effectue.component';
import { EtatLivreComponent } from './etat-livre/etat-livre.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { RayonComponent } from './rayon/rayon.component';
import { CategorieComponent } from './categorie/categorie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivreComponent } from './livre/livre.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gestion Bibliothèque',
      status: false
    },
    children: [
      {
        path: 'gestion-bibliotheque',
        loadChildren: () => import('./gestion-bibliotheque.module').then(m => m.GestionBibliothequeModule)
      },
      {
        path: 'categories',
        data: {
          breadcrumb: 'Gestion des catégories',
          icon: 'icofont-maximize bg-c-yellow',
          breadcrumb_caption: 'Catégories',
          status: true
        },
        component: CategorieComponent
      },
      {
        path: 'rayons',
        data: {
          breadcrumb: 'Gestion des rayons',
          icon: 'icofont-chart-histogram bg-c-blue',
          breadcrumb_caption: 'Rayons',
          status: true
        },
        component: RayonComponent
      },
      {
        path: 'abonnements',
        data: {
          breadcrumb: 'Abonnements',
          icon: 'icofont-maximize bg-c-yellow',
          breadcrumb_caption: 'Gestion des abonnements',
          status: true
        },
        component: AbonnementComponent
      },
      {
        path: 'etat-livres',
        data: {
          breadcrumb: 'Etat des livres',
          icon: 'icofont-maximize bg-c-yellow',
          breadcrumb_caption: 'Définissez l\'état d\'un livre',
          status: true
        },
        component: EtatLivreComponent
      },
      {
        path: 'abonnements-effectues',
        data: {
          breadcrumb: 'Abonnements éffectués',
          icon: 'icofont-maximize bg-c-yellow',
          breadcrumb_caption: 'Gérer les abonnements des lecteurs',
          status: true
        },
        component: AbonnementEffectueComponent
      },
      {
        path: 'emprunts',
        data: {
          breadcrumb: 'Gérer les livres empruntés',
          icon: 'icofont-maximize bg-c-yellow',
          breadcrumb_caption: 'Gérer les emprunts',
          status: true
        },
        component: EmpruntComponent
      },
      {
        path: 'lecteurs',
        data: {
          breadcrumb: 'Gestion des lecteurs',
          icon: 'icofont-maximize bg-c-yellow',
          breadcrumb_caption: 'Gérer les lecteurs de la bibliothèque',
          status: true
        },
        component: LecteurComponent
      },
      {
        path: 'livres',
        data: {
          breadcrumb: 'Gérer les livres',
          icon: 'icofont-maximize bg-c-yellow',
          breadcrumb_caption: 'Gérer les livres',
          status: true
        },
        component: LivreComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionDomainesRoutingModule { }
