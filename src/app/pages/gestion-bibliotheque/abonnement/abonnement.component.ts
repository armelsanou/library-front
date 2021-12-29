import { AbonnementService } from './../../../services/servicesBibliotheque/abonnement/abonnement.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import swal from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { SettingService } from '../../../services/setting/setting.service';
import { SendNotificationService } from '../../../services/send-notication/send-notification.service';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.scss']
})
export class AbonnementComponent implements OnInit {


  public abonnements: any[] = [];
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  searchText: any;
  public sortOrder = 'desc';
  error: {};
  loadAbonnement = false;
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
  abonnementForm: FormGroup;
  libelle = new FormControl('', [Validators.required]);
  periode = new FormControl('', [Validators.required]);
  prix = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);

  constructor(
    public httpClient: HttpClient,
    private settingService : SettingService,
    private sendNotificationService: SendNotificationService,
    private abonnementService: AbonnementService
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
    this.loadAbonnement = true;
    this.getAllAbonnements();
  }

  async getAllAbonnements() {
    this.abonnementService.getListAbonnements().subscribe(
        (result) => {
            this.abonnements = result;
            this.abonnements = this.abonnements.sort((a, b) => b.idAbonnement - a.idAbonnement);
            if (this.abonnements.length > 0) {
                this.isEmpty = false;
                this.loadAbonnement = false
            } else {
                this.isEmpty = true;
                this.loadAbonnement = false
            }
        },
        (err) => {
            this.loadAbonnement = false;
        }
    );
}

  createAbonnement(){
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
    this.abonnementService.createAbonnement(content).then(
      (result) => {
        if (result) {
          this.createLoad = false;
          this.settingService.option.title = "success";
          this.settingService.option.msg = "Abonnement crée avec succès.";
          this.sendNotificationService.addToast(this.settingService.option, "success");
          this.getAllAbonnements();
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

  updateAbonnement(){
    this.buttonAction = "Modification...";
    this.updateLoad = true;
    this.initializeAbonnementObject();
    const content = 
    {
      "idAbonnement": this.currentAbonnementId,
      "libelle": this.abonnement.libelle,
      "periode": this.abonnement.periode,
      "prix": this.abonnement.prix,
      "description": this.abonnement.description
    }
    this.abonnementService.updateAbonnement(content).then(
      (result) => {
        if (result) {
          this.updateLoad = false;
          this.settingService.option.title = "success";
          this.settingService.option.msg = "Abonnement modifié avec succès.";
          this.sendNotificationService.addToast(this.settingService.option, "success");
          this.getAllAbonnements();
          this.reset();
        } else {
          this.updateLoad = false;
          this.settingService.option.title = "error";
          this.settingService.option.msg = "Abonnement non modifié.";
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

  deleteAbonnement(idAbonnement) {
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
          this.abonnementService.deleteAbonnement(idAbonnement).then(
            (result) => {
              this.getAllAbonnements().then((res) => {
                Swal.fire(
                  'Abonnement Supprimé!',
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
  }

}