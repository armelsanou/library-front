import { LecteurService } from './../../../services/servicesBibliotheque/lecteur/lecteur.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import swal from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { SettingService } from '../../../services/setting/setting.service';
import { SendNotificationService } from '../../../services/send-notication/send-notification.service';

@Component({
  selector: 'app-lecteur',
  templateUrl: './lecteur.component.html',
  styleUrls: ['./lecteur.component.scss']
})
export class LecteurComponent implements OnInit {

  public lecteurs: any[] = [];
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  searchText: any;
  public sortOrder = 'desc';
  error: {};
  loadLecteurs = false;
  createLoad = false;
  updateLoad = false;
  showCancelBtn = false;
  deleteMessage = "Supprimer";
  isEmpty = false;
  buttonAction = "Enregistrer";
  currentAbonnementId: number;
  deleted = false;
  abonnement: any = {
    "libelle": "",
    "periode":	"",
    "prix": "",
    "description": ""
  }
  lecteurForm: FormGroup;
  libelle = new FormControl('', [Validators.required]);
  periode = new FormControl('', [Validators.required]);
  prix = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  imgSrc = "";

  constructor(
    public httpClient: HttpClient,
    private settingService : SettingService,
    private sendNotificationService: SendNotificationService,
    private lecteurService: LecteurService
  )
  {
    this.lecteurForm = new FormGroup({
      libelle: this.libelle,
      periode: this.periode,
      prix: this.prix,
      description: this.description
    });
    this.imgSrc = this.settingService.getApiDomainImageUploadedLocation();
  }

  ngOnInit() {
    this.loadLecteurs = true;
    this.getAllLecteurs();
  }

  async getAllLecteurs() {
    this.lecteurService.getListLecteurs().subscribe(
      (result) => {
        this.lecteurs = result;
        this.lecteurs = this.lecteurs.sort((a, b) => b.idLecteur - a.idLecteur);
        if (this.lecteurs.length > 0) {
          this.isEmpty = false;
          this.loadLecteurs = false;
        } else {
          this.isEmpty = true;
          this.loadLecteurs = false;
        }
      },
      (err) => {
        this.loadLecteurs = false;
      }
    );
  }

  /*createAbonnement(){
    this.buttonAction = "Enregistrement...";
    this.createLoad = true;
    this.initializeAbonnementObject();
    const content = 
    {
      "libelle": this.abonnement.libelle,
      "periode": this.abonnement.periode,
      "prix": this.abonnement.prix,
      "description": this.abonnement.description
    }
    this.lecteurService.emprunterLivre(content).then(
      (result) => {
        if (result) {
          this.createLoad = false;
          this.settingService.option.title = "success";
          this.settingService.option.msg = "Abonnement crée avec succès.";
          this.sendNotificationService.addToast(this.settingService.option, "success");
          this.getAlllecteurs();
          this.reset();
        } else {
          this.createLoad = false;
          this.settingService.option.title = "error";
          this.settingService.option.msg = "Abonnement non enregistré.";
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
  
  initializeAbonnementObject(){
    this.abonnement.libelle = this.lecteurForm.get('libelle').value;
    this.abonnement.periode = this.lecteurForm.get('periode').value;
    this.abonnement.prix = this.lecteurForm.get('prix').value;
    this.abonnement.description = this.lecteurForm.get('description').value;
  }

  fillFormBeforUpdating(abonnement){
    this.lecteurForm.reset();
    this.showCancelBtn = true;
    this.currentAbonnementId = Number(abonnement.idAbonnement);
    this.buttonAction = "Modifier";
    this.lecteurForm.get('libelle').setValue(abonnement.libelle);
    this.lecteurForm.get('periode').setValue(abonnement.periode);
    this.lecteurForm.get('prix').setValue(abonnement.prix);
    this.lecteurForm.get('description').setValue(abonnement.description);
    window.scrollTo(0,0);
  }

  reset(){
    this.buttonAction = "Enregistrer";
    this.lecteurForm.reset();
    this.showCancelBtn = false;
    this.createLoad = false;
    this.updateLoad = false;
  }

  submitAction(){
    if (this.buttonAction === 'Modifier') {
      this.updateAbonnement();
    }
    if (this.buttonAction === 'Enregistrer') {
      this.createAbonnement();
    }
  }*/

}
