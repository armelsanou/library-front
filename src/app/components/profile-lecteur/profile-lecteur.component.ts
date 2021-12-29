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
  }

  ngOnInit() {

    this.getUser();

    this.basicContent = '<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give\n                              you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder\n                              of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not\n                              know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves\n                              or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil\n                              and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise,\n                              except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no\n                              annoying consequences, or one who avoids a pain that produces no resultant pleasure?\' \'On the other hand, we denounce with righteous\n                              indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that\n                              they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through\n                              weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to\n                              distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able To Do what we like best,\n                              every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations\n                              of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds\n                              in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to\n                              avoid worse pain.</p>';

    setTimeout(() => {
      this.profitChartOption = {
        tooltip: {
          trigger: 'item',
          formatter: function(params) {
            const date = new Date(params.value[0]);
            let data = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ';
            data += date.getHours() + ':' + date.getMinutes();
            return data + '<br/>' + params.value[1] + ', ' + params.value[2];
          },
          responsive: true
        },
        dataZoom: {
          show: true,
          start: 70
        },
        legend: {
          data: ['Profit']
        },
        grid: {
          y2: 80
        },
        xAxis: [{
          type: 'time',
          splitNumber: 10
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: 'Profit',
          type: 'line',
          showAllSymbol: true,
          symbolSize: function(value) {
            return Math.round(value[2] / 10) + 2;
          },
          data: (function() {
            const d: any = [];
            let len = 0;
            const now = new Date();
            while (len++ < 200) {
              const random1: any = (Math.random() * 30).toFixed(2);
              const random2: any = (Math.random() * 100).toFixed(2);
              d.push([ new Date(2014, 9, 1, 0, len * 10000), random1 - 0, random2 - 0 ]);
            }
            return d;
          })()
        }]
      };
    }, 1);

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
        console.log("abonnements", this.abonnements, "emprunts", this.emprunts);
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
      "idLecteur":	3,
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
