import { EmpruntService } from './../../../services/servicesBibliotheque/emprunt/emprunt.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import swal from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { SettingService } from '../../../services/setting/setting.service';
import { SendNotificationService } from '../../../services/send-notication/send-notification.service';

@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.scss']
})
export class EmpruntComponent implements OnInit {

  public emprunts: any[] = [];
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  searchText: any;
  public sortOrder = 'desc';
  error: {};
  loadEmprunt = false;
  createLoad = false;
  updateLoad = false;
  showCancelBtn = false;
  deleteMessage = "Supprimer";
  isEmpty = false;
  buttonAction = "Avertir";
  currentAbonnementId: number;
  deleted = false;
  abonnement: any = {
    "libelle": "",
    "periode":	"",
    "prix": "",
    "description": ""
  }
  abonnementForm: FormGroup;
  libelle = new FormControl('', [Validators.required]);
  periode = new FormControl('', [Validators.required]);
  prix = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);

  constructor(
    public httpClient: HttpClient,
    private settingService : SettingService,
    private sendNotificationService: SendNotificationService,
    private empruntService: EmpruntService
  )
  {
    this.abonnementForm = new FormGroup({
      libelle: this.libelle,
      periode: this.periode,
      prix: this.prix,
      description: this.description
    });
  }

  ngOnInit() {
    this.loadEmprunt = true;
    this.getAllEmprunts();
  }

  async getAllEmprunts() {
    this.empruntService.getListEmprunts().subscribe(
      (result) => {
        this.emprunts = result;
        this.emprunts = this.emprunts.sort((a, b) => b.idAbonnement - a.idAbonnement);
        if (this.emprunts.length > 0) {
          this.isEmpty = false;
          this.loadEmprunt = false;
        } else {
          this.isEmpty = true;
          this.loadEmprunt = false;
        }
      },
      (err) => {
        this.loadEmprunt = false;
      }
    );
  }

  avertirLecteur(isbn, idLecteur, dateEmprunt){
    this.buttonAction = "En cours...";
    this.createLoad = true;
    this.empruntService.avertirLecteur(isbn, idLecteur, dateEmprunt).then(
      (result) => {
        if (result) {
          this.createLoad = false;
          this.settingService.option.title = "success";
          this.settingService.option.msg = "Avertissement envoyé.";
          this.sendNotificationService.addToast(this.settingService.option, "success");
          this.getAllEmprunts();
        } else {
          this.createLoad = false;
          this.settingService.option.title = "error";
          this.settingService.option.msg = "Avertissement non envoyé.";
          this.sendNotificationService.addToast(this.settingService.option, "error");
          this.buttonAction = "Avertir";
        }
      },
      (err) => {
        this.error = 'Une erreur est survenue. Veuillez réessayer plus tard.';
        this.settingService.option.title = "error";
        this.settingService.option.msg = this.error;
        this.sendNotificationService.addToast(this.settingService.option, "error");
        this.createLoad = false;
        this.buttonAction = "Avertir";
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
    this.empruntService.emprunterLivre(content).then(
      (result) => {
        if (result) {
          this.createLoad = false;
          this.settingService.option.title = "success";
          this.settingService.option.msg = "Abonnement crée avec succès.";
          this.sendNotificationService.addToast(this.settingService.option, "success");
          this.getAllEmprunts();
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
    this.abonnement.libelle = this.abonnementForm.get('libelle').value;
    this.abonnement.periode = this.abonnementForm.get('periode').value;
    this.abonnement.prix = this.abonnementForm.get('prix').value;
    this.abonnement.description = this.abonnementForm.get('description').value;
  }

  fillFormBeforUpdating(abonnement){
    this.abonnementForm.reset();
    this.showCancelBtn = true;
    this.currentAbonnementId = Number(abonnement.idAbonnement);
    this.buttonAction = "Modifier";
    this.abonnementForm.get('libelle').setValue(abonnement.libelle);
    this.abonnementForm.get('periode').setValue(abonnement.periode);
    this.abonnementForm.get('prix').setValue(abonnement.prix);
    this.abonnementForm.get('description').setValue(abonnement.description);
    window.scrollTo(0,0);
  }

  reset(){
    this.buttonAction = "Enregistrer";
    this.abonnementForm.reset();
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
