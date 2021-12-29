import { CategorieService } from './../../../services/servicesBibliotheque/categorie/categorie.service';
import { RayonService } from './../../../services/servicesBibliotheque/rayon/rayon.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import swal from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { SettingService } from '../../../services/setting/setting.service';
import { SendNotificationService } from '../../../services/send-notication/send-notification.service';

@Component({
  selector: 'app-rayon',
  templateUrl: './rayon.component.html',
  styleUrls: ['./rayon.component.scss']
})
export class RayonComponent implements OnInit {

  public rayons: any[] = [];
  public categories: any[] = [];
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  searchText: any;
  public sortOrder = 'desc';
  error: {};
  loadrayons = false;
  createLoad = false;
  updateLoad = false;
  showCancelBtn = false;
  deleteMessage = "Supprimer";
  totalRecords: number;
  isEmpty = false;
  buttonAction = "Enregistrer";
  deleted = false;
  rayon: any = {"libelle": "","categorie": "", "idRayon": ""}; //this is for simulating and entity, avoid creating entity named rayon as in backend because of time

  rayonForm: FormGroup;
  libelle = new FormControl('', [Validators.required]);
  idCategorie = new FormControl('', [Validators.required]);
  selectedCategorieId: any;

  constructor(
    public httpClient: HttpClient,
    public rayonService: RayonService,
    private settingService : SettingService,
    private sendNotificationService: SendNotificationService,
    public categorieService: CategorieService
  )
  {
    this.rayonForm = new FormGroup({
      libelle: this.libelle,
      idCategorie: this.idCategorie
    });
  }

  ngOnInit() {
    this.loadrayons = true;
    this.getAllCategories();
  }

  onCategorieSelect(e){
    this.selectedCategorieId = Number(e.target.value);
  }

  async getAllRayons(){
    this.rayonService.getListRayons().subscribe(
      (result) => {
        this.rayons = result;
        this.rayons = this.rayons.sort((a, b) => b.idrayon - a.idrayon);
        this.totalRecords = this.rayons.length;
        if (this.totalRecords > 0) {
          this.isEmpty = false;
        } else {
          this.isEmpty = true;
        }
        this.loadrayons = false;
      },
      (err) => {
        this.error = 'Une erreur est survenue. Veuillez réessayer plus tard.';
        this.loadrayons = false;
      }
    );
  }

  async getAllCategories(){
    this.categorieService.getListCategories().subscribe(
      (result) => {
        this.categories = result;
        this.categories = this.categories.sort((a, b) => b.idCategorie - a.idCategorie);
        this.totalRecords = this.categories.length;
        if (this.totalRecords > 0) {
          this.getAllRayons();
        } else {
          this.isEmpty = true;
          this.loadrayons = false;
        }
      },
      (err) => {
        this.error = 'Une erreur est survenue. Veuillez réessayer plus tard.';
      }
    );
  }

  createRayon(){
    this.buttonAction = "Enregistrement...";
    this.createLoad = true;
    this.initializeRayonObject();
    this.rayonService.createRayon(this.rayon.categorie, this.rayon.libelle).then(
      (result) => {
        if (result) {
          this.createLoad = false;
          this.settingService.option.title = "success";
          this.settingService.option.msg = "Rayon crée avec succès.";
          this.sendNotificationService.addToast(this.settingService.option, "success");
          this.getAllRayons();
          this.reset();
        } else {
          this.createLoad = false;
          this.settingService.option.title = "error";
          this.settingService.option.msg = "Rayon non enregistré.";
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

  updateRayon(){
    this.buttonAction = "Modification...";
    this.updateLoad = true;
    this.initializeRayonObject();
    const content = 
    {
      "idCategorie": this.selectedCategorieId,
      "libelle": this.rayon.libelle,
      "idRayon": this.rayon.idRayon
    }
    this.rayonService.updateRayon(content).then(
      (result) => {
        if (result) {
          this.updateLoad = false;
          this.settingService.option.title = "success";
          this.settingService.option.msg = "Rayon modifié avec succès.";
          this.sendNotificationService.addToast(this.settingService.option, "success");
          this.getAllRayons();
          this.reset();
        } else {
          this.updateLoad = false;
          this.settingService.option.title = "error";
          this.settingService.option.msg = "Rayon non modifié.";
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

  deleteRayon(idRayon) {
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
          this.rayonService.deleteRayon(idRayon).then(
            (result) => {
              this.getAllRayons().then((res) => {
                Swal.fire(
                  'Rayon Supprimé!',
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

  initializeRayonObject(idRayon=null){
    this.rayon.libelle = this.rayonForm.get('libelle').value;
    this.rayon.categorie = this.selectedCategorieId;
    if (idRayon) {
      this.rayon.idRayon = idRayon;
    }
  }

  fillFormBeforUpdating(rayon){
    this.rayonForm.reset();
    this.showCancelBtn = true;
    this.selectedCategorieId = Number(rayon.idCategorie.idCategorie);
    this.buttonAction = "Modifier";
    this.rayonForm.get('libelle').setValue(rayon.libelle);
    this.rayonForm.get('idCategorie').setValue(rayon.idCategorie.idCategorie);
    this.initializeRayonObject(rayon.idRayon);
    window.scrollTo(0,0);
  }

  reset(){
    this.buttonAction = "Enregistrer";
    this.rayonForm.reset();
    this.showCancelBtn = false;
    this.createLoad = false;
    this.updateLoad = false;
  }

  submitAction(){
    if (this.buttonAction === 'Modifier') {
      this.updateRayon();
    }
    if (this.buttonAction === 'Enregistrer') {
      this.createRayon();
    }
  }

}
