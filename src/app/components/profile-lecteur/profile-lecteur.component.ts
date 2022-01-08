import { LecteurService } from './../../services/servicesBibliotheque/lecteur/lecteur.service';
import { SettingService } from './../../services/setting/setting.service';
import { SendNotificationService } from './../../services/send-notication/send-notification.service';
import { UserService } from './../../services/servicesBibliotheque/user/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-profile-lecteur',
  templateUrl: './profile-lecteur.component.html',
  styleUrls: ['./profile-lecteur.component.scss'],
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
export class ProfileLecteurComponent implements OnInit {
  editProfile = true;
  editProfileIcon = 'icofont-edit';

  editAbout = true;
  editAboutIcon = 'icofont-edit';

  public basicContent: string;

  profileForm: FormGroup;
  nom = new FormControl('', [Validators.required]);
  prenom = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  login = new FormControl('', [Validators.required]);
  telephone = new FormControl('', [Validators.required]);


  public abonnements: any = [];
  public emprunts: any = [];
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  profitChartOption: any;
  user: any = null;
  imgSrc = "";

  constructor(
    public httpClient: HttpClient,private router: Router, private userService: UserService,
    private sendNotificationService: SendNotificationService,
    private settingService: SettingService,
    private lecteurService: LecteurService
  ) {
    this.profileForm = new FormGroup({
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      login: this.login,
      telephone: this.telephone
    });
    this.imgSrc = this.settingService.getApiDomainImageUploadedLocation();
  }

  ngOnInit() {

    this.getUser();

  }

  initializeProfileForm(obj){
    this.profileForm.get('nom').setValue(obj.nom);
    this.profileForm.get('prenom').setValue(obj.prenom);
    this.profileForm.get('email').setValue(obj.email);
    this.profileForm.get('login').setValue(obj.login);
    this.profileForm.get('telephone').setValue(obj.telephone);
  }

  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }

  toggleEditAbout() {
    this.editAboutIcon = (this.editAboutIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editAbout = !this.editAbout;
  }

  getUser(){
    this.user = this.userService.getUser();
    this.lecteurService.getLecteur(this.user.idLecteur).then(
      (result) => {
        let res: any = result;
        this.abonnements = res.effectuerabonnementList;
        this.emprunts = res.empruntList;
      },
      (err) => {
        Swal.fire('Une erreur est survenue!','Veuillez réessayer plus tard.','error');
      }
    );
    if (this.user) {
      this.initializeProfileForm(this.user);
    }
  }

  update(){
    const content = {
      "idLecteur":	this.user.idLecteur,
      "nom":	this.profileForm.get('nom').value,
      "prenom":	this.profileForm.get('prenom').value,
      "email":	this.profileForm.get('email').value,
      "login":	this.profileForm.get('login').value,
      "role": "lecteur",
      "telephone":	this.profileForm.get('telephone').value
    }
    if(this.userService.isLoggedIn()){
      this.user = this.userService.getUser();
      Swal.fire({
        title: 'Etes-vous sûr de vouloir modifier?',
        text: "Cette action est irréversible!",
        type: 'question',
        showCancelButton: true,
        showLoaderOnConfirm: true,
        confirmButtonColor: '#93BE52',
        cancelButtonColor: '#d33',
        confirmButtonClass: 'btn btn-success btn-sm m-r-10',
        cancelButtonClass: 'btn btn-danger btn-sm',
        confirmButtonText: 'Oui, modifier!',
        preConfirm: () => {
          return new Promise((resolve) => {
            this.userService.updateLecteur(content).then(
              (result) => {
                Swal.fire(
                  'Mis à jour avec succès!',
                  'Votre profile a été mis à jour!',
                  'success'
                );
                Swal.hideLoading();
                localStorage.setItem("user", JSON.stringify(content));
                this.getUser();
              },
              (err) => {
                Swal.fire('Une erreur est survenue!','Veuillez réessayer plus tard.','error');
              }
            );
          });
        },
        allowOutsideClick: () => !swal.isLoading()
      });
    }else{
      this.settingService.option.title = "error";
      this.settingService.option.msg = "Vous devez vous connecter pour continuer";
      this.sendNotificationService.addToast(this.settingService.option, "error");
    }
  }

}
