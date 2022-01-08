import { FileUploadService } from './../../../services/servicesBibliotheque/file-upload/file-upload.service';
import { CategorieService } from './../../../services/servicesBibliotheque/categorie/categorie.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import swal from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { SettingService } from '../../../services/setting/setting.service';
import { SendNotificationService } from '../../../services/send-notication/send-notification.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  @ViewChild("image", {static: false}) image: ElementRef;
  public categories: any[] = [];
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  searchText: any;
  public sortOrder = 'desc';
  error: {};
  loadcategories = false;
  createLoad = false;
  updateLoad = false;
  showCancelBtn = false;
  deleteMessage = "Supprimer";
  totalRecords: number;
  isEmpty = false;
  buttonAction = "Enregistrer";
  currentCategorieId: number;
  deleted = false;
  categorie: any = {"idCategorie":"", "libelle": "", "image": ""};
  imgSrc = "";

  categorieForm: FormGroup;
  libelle = new FormControl('', [Validators.required]);
  img = new FormControl('');

  constructor(
    public httpClient: HttpClient,
    public categorieService: CategorieService,
    private settingService : SettingService,
    private fileUploadService: FileUploadService,
    private sendNotificationService: SendNotificationService
  )
  {
    this.categorieForm = new FormGroup({
      libelle: this.libelle,
      img: this.img
    });
    this.imgSrc = this.settingService.getApiDomainImageUploadedLocation();
  }

  ngOnInit() {
    this.loadcategories = true;
    this.getAllCategories();
  }

  async getAllCategories(){
    this.categorieService.getListCategories().subscribe(
      (result) => {
        this.categories = result;
        this.categories = this.categories.sort((a, b) => b.idCategorie - a.idCategorie);
        this.totalRecords = this.categories.length;
        if (this.totalRecords > 0) {
          this.isEmpty = false;
        } else {
          this.isEmpty = true;
        }
        this.loadcategories = false;
      },
      (err) => {
        this.error = 'Une erreur est survenue. Veuillez réessayer plus tard.';
        this.loadcategories = false;
      }
    );
  }

  upload(file=null,create=null,update=null) {
    var formData: any = new FormData();
    formData.append("file", this.categorieForm.get('img').value);
    if (file) {
      if (create) {
        this.fileUploadService.upload(formData).subscribe(
          (response) => this.createCategorie(),
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
          (response) => this.updateCategorie(),
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
        this.createCategorie();
      }
      if (update) {
        this.updateCategorie();
      }
    }
  }

  uploadFile(event) {
    const file = event.target.files[0];
    this.categorie.image = file.name;
    this.categorieForm.get('img').setValue(file); //this line is mandatory
  }

  createCategorie(){
    this.buttonAction = "Enregistrement...";
    this.createLoad = true;
    this.initializeCategorieObject();
    this.categorieService.createCategorie(this.categorie).then(
      (result) => {
        if (result) {
          this.createLoad = false;
          this.settingService.option.title = "success";
          this.settingService.option.msg = "categorie créee avec succès.";
          this.sendNotificationService.addToast(this.settingService.option, "success");
          this.getAllCategories();
          this.reset();
        } else {
          this.createLoad = false;
          this.settingService.option.title = "error";
          this.settingService.option.msg = "categorie non enregistrée.";
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

  updateCategorie(){
    this.buttonAction = "Modification...";
    this.updateLoad = true;
    this.initializeCategorieObject();
    this.categorieService.updateCategorie(this.categorie).then(
      (result) => {
        if (result) {
          this.updateLoad = false;
          this.settingService.option.title = "success";
          this.settingService.option.msg = "categorie modifiée avec succès.";
          this.sendNotificationService.addToast(this.settingService.option, "success");
          this.getAllCategories();
          this.reset();
        } else {
          this.updateLoad = false;
          this.settingService.option.title = "error";
          this.settingService.option.msg = "categorie non modifiée.";
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

  deleteCategorie(idCategorie) {
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
          this.categorieService.deleteCategorie(idCategorie).then(
            (result) => {
              this.getAllCategories().then((res) => {
                Swal.fire(
                  'Categorie Supprimée!',
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

  initializeCategorieObject(){
    this.categorie.libelle = this.categorieForm.get('libelle').value;
    this.categorie.idCategorie = this.currentCategorieId;
  }

  fillFormBeforUpdating(categorie){
    this.categorieForm.reset();
    this.showCancelBtn = true;
    this.currentCategorieId = Number(categorie.idCategorie);
    this.buttonAction = "Modifier";
    this.categorieForm.get('libelle').setValue(categorie.libelle);
    window.scrollTo(0,0);
  }

  reset(){
    this.buttonAction = "Enregistrer";
    this.categorieForm.reset();
    this.showCancelBtn = false;
    this.createLoad = false;
    this.updateLoad = false;
  }

  submitAction(){
    var file = null;
    if (this.categorieForm.get('img').value) {
      file = this.categorieForm.get('img').value;
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
