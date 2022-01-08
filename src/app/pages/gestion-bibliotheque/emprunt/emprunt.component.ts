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
  buttonAction1 = "Rendu ?";
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

  avertirLecteur(isbn, idLecteur, dateEmprunt, nomLecteur){
    Swal.fire({
      title: 'Envoyer un arvertissement à '+nomLecteur +"?",
      text: "Cette action est irréversible!",
      type: 'question',
      showCancelButton: true,
      showLoaderOnConfirm: true,
      confirmButtonColor: '#93BE52',
      cancelButtonColor: '#d33',
      confirmButtonClass: 'btn btn-success btn-sm',
      cancelButtonClass: 'btn btn-danger btn-sm',
      confirmButtonText: 'Oui, envoyer!',
      preConfirm: () => {
          return new Promise((resolve) => {
          this.buttonAction = "En cours...";
          this.createLoad = true;
          this.empruntService.avertirLecteur(isbn, idLecteur, dateEmprunt).then(
            (result) => {
              if (result) {
                this.createLoad = false;
                this.settingService.option.title = "success";
                this.settingService.option.msg = "Avertissement envoyé.";
                this.sendNotificationService.addToast(this.settingService.option, "success");
                this.buttonAction = "Avertir";
                this.getAllEmprunts();
                Swal.close();
              } else {
                this.createLoad = false;
                this.settingService.option.title = "error";
                this.settingService.option.msg = "Avertissement non envoyé.";
                this.sendNotificationService.addToast(this.settingService.option, "error");
                this.buttonAction = "Avertir";
                Swal.close();
              }
            },
            (err) => {
              this.error = 'Une erreur est survenue. Veuillez réessayer plus tard.';
              this.settingService.option.title = "error";
              this.settingService.option.msg = this.error;
              this.sendNotificationService.addToast(this.settingService.option, "error");
              this.createLoad = false;
              this.buttonAction = "Avertir";
              Swal.close();
            }
          );
        });
      },
      allowOutsideClick: () => !swal.isLoading(),
    });
  }

  remettreLivre(isbn, idLecteur, dateEmprunt, nomLecteur){
    Swal.fire({
      title: "Vous confirmez que "+nomLecteur+" a rendu le livre?",
      text: "Cette action est irréversible!",
      type: 'question',
      showCancelButton: true,
      showLoaderOnConfirm: true,
      confirmButtonColor: '#93BE52',
      cancelButtonColor: '#d33',
      confirmButtonClass: 'btn btn-success btn-sm',
      cancelButtonClass: 'btn btn-danger btn-sm',
      confirmButtonText: 'Oui, remis!',
      preConfirm: () => {
          return new Promise((resolve) => {
          this.buttonAction1 = "En cours...";
          this.createLoad = true;
          this.empruntService.remettreLivre(isbn, idLecteur, dateEmprunt).then(
            (result) => {
              if (result) {
                this.createLoad = false;
                this.settingService.option.title = "success";
                this.settingService.option.msg = "Livre marqué comme remis.";
                this.sendNotificationService.addToast(this.settingService.option, "success");
                this.buttonAction1 = "Rendu ?";
                this.getAllEmprunts();
                Swal.close();
              } else {
                this.createLoad = false;
                this.settingService.option.title = "error";
                this.settingService.option.msg = "Opération non reussie.";
                this.sendNotificationService.addToast(this.settingService.option, "error");
                this.buttonAction1 = "Rendu ?";
                Swal.close();
              }
            },
            (err) => {
              this.error = 'Une erreur est survenue. Veuillez réessayer plus tard.';
              this.settingService.option.title = "error";
              this.settingService.option.msg = this.error;
              this.sendNotificationService.addToast(this.settingService.option, "error");
              this.createLoad = false;
              this.buttonAction1 = "Rendu ?";
              Swal.close();
            }
          );
        });
      },
      allowOutsideClick: () => !swal.isLoading(),
    });
  }
  
}
