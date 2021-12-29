import { CategorieComponent } from './categorie/categorie.component';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionBibliothequeComponent } from './gestion-bibliotheque.component';
import { GestionDomainesRoutingModule } from './gestion-bibliotheque-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'angular2-datatable';
import { HttpClientModule } from '@angular/common/http';
import { TinymceModule } from 'angular2-tinymce';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UiSwitchModule } from 'ng2-ui-switch';
import { TagInputModule } from 'ngx-chips';
import { NgxEchartsModule } from 'ngx-echarts';
import { SelectModule } from 'ng-select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { LecteurComponent } from './lecteur/lecteur.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { AbonnementEffectueComponent } from './abonnement-effectue/abonnement-effectue.component';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { EtatLivreComponent } from './etat-livre/etat-livre.component';
import { LivreComponent } from './livre/livre.component';
import { RayonComponent } from './rayon/rayon.component';

@NgModule({
  imports: [
    CommonModule,
    GestionDomainesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTableModule,
    TagInputModule,
    UiSwitchModule,
    NgxDatatableModule,
    TinymceModule,
    NgxEchartsModule,
    SelectModule,
    Ng2SearchPipeModule,
    Ng2TelInputModule
  ],
  declarations: [
    GestionBibliothequeComponent,
    CategorieComponent,
    LecteurComponent,
    AbonnementComponent,
    AbonnementEffectueComponent,
    EmpruntComponent,
    EtatLivreComponent,
    LivreComponent,
    RayonComponent
  ],
})
export class GestionBibliothequeModule { }
