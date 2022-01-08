import { CategorieService } from './../../../services/servicesBibliotheque/categorie/categorie.service';
import { EtatLivreService } from './../../../services/servicesBibliotheque/etat-livre/etat-livre.service';
import { LivreService } from './../../../services/servicesBibliotheque/livre/livre.service';
import { SendNotificationService } from './../../../services/send-notication/send-notification.service';
import { FileUploadService } from './../../../services/servicesBibliotheque/file-upload/file-upload.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SettingService } from './../../../services/setting/setting.service';
import {HttpClient, HttpEventType} from "@angular/common/http";
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {Observable} from 'rxjs';
import * as $ from 'jquery';
import swal from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';

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
  @ViewChild("image", {static: false}) image: ElementRef;
  public rowsOnPage = 12;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public categories: any[] = [];
  public livres: any[] = [];
  public etats: any[] = [];
  searchText: any;
  error: {};
  loadLivres = true;
  totalRecords: number;
  isEmptyLivre = false;
  currentLivreId: number;
  currentEtatId: number;
  currentCategorieId: number;
  createLoad = false;
  updateLoad = false;
  showCancelBtn = false;
  deleteMessage = "Supprimer";
  buttonAction = "Enregistrer";
  deleted = false;
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

  livreForm: FormGroup;
  isbn = new FormControl('', [Validators.required]);
  titre = new FormControl('', [Validators.required]);
  dateEdition = new FormControl('', [Validators.required]);
  auteur = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  idEtatLivre = new FormControl('', [Validators.required]);
  idCategorie = new FormControl('', [Validators.required]);
  img = new FormControl('');

  constructor(
    public httpClient: HttpClient,
    public livreService: LivreService,
    private settingService: SettingService,
    private fileUploadService: FileUploadService,
    private sendNotificationService: SendNotificationService,
    public etatLivreService: EtatLivreService,
    public categorieService: CategorieService
  ) 
  {
    this.livreForm = new FormGroup({
      isbn: this.isbn,
      titre: this.titre,
      dateEdition: this.dateEdition,
      auteur: this.auteur,
      description: this.description,
      idEtatLivre: this.idEtatLivre,
      idCategorie: this.idCategorie,
      img: this.img
    });
    this.imgSrc = this.settingService.getApiDomainImageUploadedLocation();
  }

  ngOnInit() {
    this.getAllLivres();
    this.getAllEtatLivres();
    this.getAllCategories();
  }

  async getAllEtatLivres(){
    this.etatLivreService.getListEtatLivres().subscribe(
      (result) => {
        this.etats = result;
        this.etats = this.etats.sort((a, b) => b.idEtatLivre - a.idEtatLivre);
      },
      (err) => {
        this.error = 'Une erreur est survenue. Veuillez réessayer plus tard.';
      }
    );
  }

  getAllCategories(){
    this.categorieService.getListCategories().subscribe(
      (result) => {
        this.categories = result;
        this.categories = this.categories.sort((a, b) => b.idCategorie - a.idCategorie);
      },
      (err) => {
        this.error = 'Une erreur est survenue. Veuillez réessayer plus tard.';
      }
    );
  };

  async getAllLivres(){
    this.livreService.getListLivres().subscribe(
      (result) => {
        this.livres = result;
        this.totalRecords = this.livres.length;
        if (this.totalRecords > 0) {
          this.isEmptyLivre = false;
        } else {
          this.isEmptyLivre = true;
        }
        this.loadLivres = false;
      },
      (err) => {
        this.error = 'Une erreur est survenue. Veuillez réessayer plus tard.';
        this.loadLivres = false;
      }
    );
  }

  upload(file=null,create=null,update=null) {
    var formData: any = new FormData();
    formData.append("file", this.livreForm.get('img').value);
    if (file) {
      if (create) {
        this.fileUploadService.upload(formData).subscribe(
          (response) => this.createLivre(),
          (error) => (err) => {
            this.error = 'Une erreur est survenue l image n a pas été correctement chargée.';
            this.settingService.option.title = "error";
            this.settingService.option.msg = this.error;
            this.sendNotificationService.addToast(this.settingService.option, "warning");
          }
        )
      }
      if (update) {
        this.fileUploadService.upload(formData).subscribe(
          (response) => this.updateLivre(),
          (error) => (err) => {
            this.error = 'Une erreur est survenue l image n a pas été correctement chargée.';
            this.settingService.option.title = "error";
            this.settingService.option.msg = this.error;
            this.sendNotificationService.addToast(this.settingService.option, "warning");
          }
        )
      }
    } else {
      if (create) {
        this.createLivre();
      }
      if (update) {
        this.updateLivre();
      }
    }
  }

  uploadFile(event) {
    const file = event.target.files[0];
    this.livre.image = file.name;
    this.livreForm.get('img').setValue(file); //this line is mandatory
  }

  createLivre(){
    this.buttonAction = "Enregistrement...";
    this.createLoad = true;
    this.initializeLivreObject();
    this.livreService.createLivre(this.livre).then(
      (result) => {
        if (result) {
          this.createLoad = false;
          this.settingService.option.title = "success";
          this.settingService.option.msg = "Livre crée avec succès.";
          this.sendNotificationService.addToast(this.settingService.option, "success");
          this.getAllLivres();
          this.reset();
        } else {
          this.createLoad = false;
          this.settingService.option.title = "error";
          this.settingService.option.msg = "Livre non enregistrée.";
          this.sendNotificationService.addToast(this.settingService.option, "error");
          this.buttonAction = "Enregistrer";
        }
      },
      (err) => {
        this.error = 'Une erreur est survenue. Veuillez réessayer plus tard.';
        this.settingService.option.title = "error";
        this.settingService.option.msg = this.error;
        this.sendNotificationService.addToast(this.settingService.option, "error");
        this.createLoad = false;
        this.buttonAction = "Enregistrer";
      }
    );
  }

  updateLivre(){
    this.buttonAction = "Modification...";
    this.updateLoad = true;
    this.initializeLivreObject();
    this.livreService.updateLivre(this.livre).then(
      (result) => {
        if (result) {
          this.updateLoad = false;
          this.settingService.option.title = "success";
          this.settingService.option.msg = "Livre modifié avec succès.";
          this.sendNotificationService.addToast(this.settingService.option, "success");
          this.getAllLivres();
          this.reset();
        } else {
          this.updateLoad = false;
          this.settingService.option.title = "error";
          this.settingService.option.msg = "Livre non modifié.";
          this.sendNotificationService.addToast(this.settingService.option, "error");
          this.buttonAction = "Modifier";
        }
      },
      (err) => {
        this.error = 'Une erreur est survenue. Veuillez réessayer plus tard.';
        this.settingService.option.title = "error";
        this.settingService.option.msg = this.error;
        this.sendNotificationService.addToast(this.settingService.option, "error");
        this.updateLoad = false;
        this.buttonAction = "Modifier";
      }
    );
  }

  deleteLivre(isbn) {
    Swal.fire({
      title: 'Etes-vous sûr?',
      text: "Cette action est irréversible!",
      type: 'question',
      showCancelButton: true,
      showLoaderOnConfirm: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!',
      preConfirm: () => {
        return new Promise((resolve) => {
          this.livreService.deleteLivre(isbn).then(
            (result) => {
              this.getAllLivres().then((res) => {
                Swal.fire(
                  'Livre Supprimé!',
                  'supression!',
                  'success'
                )
              });
              this.reset();
              Swal.hideLoading();
            },
              (err) => {
                Swal.fire('Une erreur est survenue!','Veuillez réessayer plus tard.','error');
              }
            );
        })
      },
      allowOutsideClick: () => !swal.isLoading()
    })
  }

  initializeLivreObject(){
    this.livre.isbn = this.livreForm.get('isbn').value;
    this.livre.titre = this.livreForm.get('titre').value;
    this.livre.dateEdition = this.livreForm.get('dateEdition').value;
    this.livre.auteur = this.livreForm.get('auteur').value;
    this.livre.description = this.livreForm.get('description').value;
    this.livre.idEtatLivre = this.livreForm.get('idEtatLivre').value;
    this.livre.idCategorie = this.livreForm.get('idCategorie').value;
    /*if (this.livreForm.get('img').value) {
      this.livre.image = this.livreForm.get('img').value;
    }*/
  }

  onCategorieSelect(e){
    this.currentCategorieId = e.target.value;
  }

  onEtatSelect(e){
    this.currentEtatId = e.target.value;
  }

  fillFormBeforUpdating(livre){
    this.livreForm.reset();
    this.showCancelBtn = true;
    this.currentLivreId = Number(livre.isbn);
    this.buttonAction = "Modifier";
    this.livreForm.get('isbn').setValue(livre.isbn);
    this.livreForm.get('titre').setValue(livre.titre);
    this.livreForm.get('dateEdition').setValue(livre.dateEdition);
    this.livreForm.get('auteur').setValue(livre.auteur);
    this.livreForm.get('description').setValue(livre.description);
    this.livreForm.get('idEtatLivre').setValue(livre.idEtatLivre.idEtatLivre);
    this.livreForm.get('idCategorie').setValue(livre.idCategorie.idCategorie);
    //this.livreForm.get('img').setValue(livre.image);
    this.livre.image = livre.image;
    console.log("form value", this.livreForm.value);
    window.scrollTo(0,0);
  }

  reset(){
    this.buttonAction = "Enregistrer";
    this.livreForm.reset();
    this.showCancelBtn = false;
    this.createLoad = false;
    this.updateLoad = false;
  }

  submitAction(){
    var file = null;
    if (this.livreForm.get('img').value) {
      file = this.livreForm.get('img').value;
    }
    console.log("submitted", this.buttonAction,file);
    if (this.buttonAction === 'Modifier') {
      this.upload(file,null,"yes");
      //this.updateLivre();
    }
    if (this.buttonAction === 'Enregistrer') {
      //this.createLivre();
      this.upload(file,"yes",null);
    }
  }
}