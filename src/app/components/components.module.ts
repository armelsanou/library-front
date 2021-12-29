import { AbonnementComponent } from './abonnement/abonnement.component';
import { TitleComponent } from './../layout/bibliotheque/title/title.component';
import { RouterModule } from '@angular/router';
import { SimpleSlideComponent } from './simple-slide/simple-slide.component';
import { SimpleNavbarComponent } from './simple-navbar/simple-navbar.component';
import { HomeComponent } from './home/home.component';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from '../layout/bibliotheque/breadcrumbs/breadcrumbs.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProfileLecteurComponent } from './profile-lecteur/profile-lecteur.component';
import { TinymceModule } from 'angular2-tinymce';
import { DataTableModule } from 'angular2-datatable';
import { NgxEchartsModule } from 'ngx-echarts';
import { LivreComponent } from './livre/livre.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    TinymceModule,
    HttpClientModule,
    DataTableModule,
    NgxEchartsModule
  ],
  declarations: [
    ComponentsComponent,
    HomeComponent,
    SimpleNavbarComponent,
    SimpleSlideComponent,
    TitleComponent,
    BreadcrumbsComponent,
    AbonnementComponent,
    CategorieComponent,
    ProfileLecteurComponent,
    LivreComponent
  ]
})
export class ComponentsModule { }
