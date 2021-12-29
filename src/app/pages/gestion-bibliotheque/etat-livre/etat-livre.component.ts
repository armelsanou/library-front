import { EtatLivreService } from './../../../services/servicesBibliotheque/etat-livre/etat-livre.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import swal from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { SettingService } from '../../../services/setting/setting.service';
import { SendNotificationService } from '../../../services/send-notication/send-notification.service';

@Component({
  selector: 'app-etat-livre',
  templateUrl: './etat-livre.component.html',
  styleUrls: ['./etat-livre.component.scss']
})
export class EtatLivreComponent implements OnInit {

  public etats: any[] = [];
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  searchText: any;
  public sortOrder = 'desc';
  error: {};
  loadEtats = false;
  createLoad = false;
  updateLoad = false;
  showCancelBtn = false;
  deleteMessage = "Supprimer";
  totalRecords: number;
  isEmpty = false;
  buttonAction = "Enregistrer";
  currentEtatId: number;
  deleted = false;
  etat: any = {"libelle": ""};

  etatLivreForm: FormGroup;
  libelle = new FormControl('', [Validators.required]);

  constructor(
    public httpClient: HttpClient,
    public etatLivreService: EtatLivreService,
    private settingService : SettingService,
    private sendNotificationService: SendNotificationService,
  )
  {
    this.etatLivreForm = new FormGroup({
      libelle: this.libelle
    });
  }

  ngOnInit() {
    this.loadEtats = true;
    this.getAllEtatLivres();
  }

  async getAllEtatLivres(){
    this.etatLivreService.getListEtatLivres().subscribe(
      (result) => {
        this.etats = result;
        this.etats = this.etats.sort((a, b) => b.idEtatLivre - a.idEtatLivre);
        this.totalRecords = this.etats.length;
        if (this.totalRecords > 0) {
          this.isEmpty = false;
        } else {
          this.isEmpty = true;
        }
        this.loadEtats = false;
      },
      (err) => {
        this.error = 'Une erreur est survenue. Veuillez réessayer plus tard.';
        this.loadEtats = false;
      }
    );
  }

  createEtatLivre(){
    this.buttonAction = "Enregistrement...";
    this.createLoad = true;
    this.initializeetatObject();
    this.etatLivreService.createEtatLivre(this.etat.libelle).then(
      (result) => {
        if (result) {
          this.createLoad = false;
          this.settingService.option.title = "success";
          this.settingService.option.msg = "etat crée avec succès.";
          this.sendNotificationService.addToast(this.settingService.option, "success");
          this.getAllEtatLivres();
          this.reset();
        } else {
          this.createLoad = false;
          this.settingService.option.title = "error";
          this.settingService.option.msg = "etat non enregistré.";
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

  updateEtatLivre(){
    this.buttonAction = "Modification...";
    this.updateLoad = true;
    this.initializeetatObject();
    const content = 
    {
      "idEtatLivre": this.currentEtatId,
      "etat": this.etat.libelle
    }
    this.etatLivreService.updateEtatLivre(content).then(
      (result) => {
        if (result) {
          this.updateLoad = false;
          this.settingService.option.title = "success";
          this.settingService.option.msg = "etat modifié avec succès.";
          this.sendNotificationService.addToast(this.settingService.option, "success");
          this.getAllEtatLivres();
          this.reset();
        } else {
          this.updateLoad = false;
          this.settingService.option.title = "error";
          this.settingService.option.msg = "etat non modifié.";
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

  deleteEtatLivre(idEtatLivre) {
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
          this.etatLivreService.deleteEtatLivre(idEtatLivre).then(
            (result) => {
              this.getAllEtatLivres().then((res) => {
                Swal.fire(
                  'etat Supprimé!',
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

  initializeetatObject(){
    this.etat.libelle = this.etatLivreForm.get('libelle').value;
  }

  fillFormBeforUpdating(etat){
    this.etatLivreForm.reset();
    this.showCancelBtn = true;
    this.currentEtatId = Number(etat.idEtatLivre);
    this.buttonAction = "Modifier";
    this.etatLivreForm.get('libelle').setValue(etat.etat);
    window.scrollTo(0,0);
  }

  reset(){
    this.buttonAction = "Enregistrer";
    this.etatLivreForm.reset();
    this.showCancelBtn = false;
    this.createLoad = false;
    this.updateLoad = false;
  }

  submitAction(){
    if (this.buttonAction === 'Modifier') {
      this.updateEtatLivre();
    }
    if (this.buttonAction === 'Enregistrer') {
      this.createEtatLivre();
    }
  }

}
