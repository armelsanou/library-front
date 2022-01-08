import { Router } from '@angular/router';
import { SettingService } from './../../services/setting/setting.service';
import { CategorieService } from './../../services/servicesBibliotheque/categorie/categorie.service';
import { LivreService } from './../../services/servicesBibliotheque/livre/livre.service';
import {HttpClient, HttpEventType} from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.scss'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class LivreComponent implements OnInit {
  editProfile = true;
  editProfileIcon = 'icofont-edit';

  editAbout = true;
  editAboutIcon = 'icofont-edit';

  public basicContent: string;

  public rowsOnPage = 12;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public categories: any[] = [];
  public livres: any[] = [];
  public livresTemp: any[] = [];
  public livresForCategorie : any;
  searchText: any;
  error: {};
  loadcategories = true;
  loadLivres = true;
  totalRecords: number;
  isEmptyLivre = false;
  isEmptyCategorie = false;
  currentCategorieId: number;
  currentLivreId: number;
  categorie: any = {"libelle": ""};
  livre: any = {
    'isbn': "",
    'titre': "",
    'dateEdition': "",
    'auteur': "",
    'image': "",
    'description': "",
    'idEtatLivre': "",
    'idCategorie': ""
  }
  imgSrc = "";

  constructor(public httpClient: HttpClient,private router: Router,public categorieService: CategorieService,public livreService: LivreService,private settingService: SettingService) {
    this.imgSrc = this.settingService.getApiDomainImageUploadedLocation();
  }

  async ngOnInit() {
    this.getAllCategories();
    this.getAllLivres();
  }

  getAllCategories(){
    this.categorieService.getListCategories().subscribe(
      (result) => {
        this.categories = result;
        this.categories = this.categories.sort((a, b) => b.idCategorie - a.idCategorie);
        if (this.categories.length > 0) {
          this.isEmptyCategorie = false;
        } else {
          this.isEmptyCategorie = true;
        }
        this.loadcategories = false;
      },
      (err) => {
        this.error = 'Une erreur est survenue. Veuillez réessayer plus tard.';
        this.loadcategories = false;
      }
    );
  }

  getAllLivres(){
    this.livreService.getListLivresDisponibles().subscribe(
      (result) => {
        this.livres = result;
        this.livres = this.livres.sort((a, b) => b.idCategorie.idCategorie - a.idCategorie.idCategorie);
        this.livresTemp = this.livres.sort((a, b) => b.idCategorie.idCategorie - a.idCategorie.idCategorie);
        this.totalRecords = this.livres.length;
        if (this.totalRecords > 0) {
          this.isEmptyLivre = false;
        } else {
          this.isEmptyLivre = true;
        }
        this.loadLivres = false;
        this.getClickedCat();
      },
      (err) => {
        this.error = 'Une erreur est survenue. Veuillez réessayer plus tard.';
        this.loadLivres = false;
        this.getClickedCat();
      }
    );
  }

  getLivresForCategorie(idCategorie){
    $(".list-group-item").removeClass("active");
    $("#cat-"+idCategorie).addClass("active");
    this.loadLivres = true;
    this.livres = [];
    this.isEmptyLivre = false;
    if (idCategorie === 'all') {
      this.livres = this.livresTemp;
      localStorage.removeItem("cat");
      this.loadLivres = false;
    } else {
      this.livreService.getLivresForCategorie(idCategorie).then(
        (result:any) => {
          if (result.length  > 0) {
            this.livres = result.sort((a, b) => b.idCategorie.idCategorie - a.idCategorie.idCategorie);
            this.isEmptyLivre = false;
          } else {
            this.isEmptyLivre = true;
          }
          this.loadLivres = false;
        },
        (err) => {
          this.error = 'Une erreur est survenue. Veuillez réessayer plus tard.';
          this.isEmptyLivre = false;
        }
      );
    }
  }

  getClickedCat(){
    if (localStorage.getItem("cat")) {
      this.getLivresForCategorie(localStorage.getItem("cat"));
    }
  }

  seeDetails(isbn){
    this.router.navigate(['/components/livre/'+isbn]);
  }

}