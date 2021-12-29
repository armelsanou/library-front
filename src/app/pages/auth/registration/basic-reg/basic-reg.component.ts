import { SettingService } from './../../../../services/setting/setting.service';
import { SendNotificationService } from './../../../../services/send-notication/send-notification.service';
import { UserService } from './../../../../services/servicesBibliotheque/user/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-basic-reg',
  templateUrl: './basic-reg.component.html',
  styleUrls: ['./basic-reg.component.scss']
})
export class BasicRegComponent implements OnInit {

  registrationForm: FormGroup;
  nom = new FormControl('', [Validators.required]);
  prenom = new FormControl('');
  email = new FormControl('', [Validators.required]);
  login = new FormControl('', [Validators.required]);
  telephone = new FormControl('');
  mdp = new FormControl('', [Validators.required]);
  confirmmdp = new FormControl('', [Validators.required]);
  loadInscription = false;
  buttonAction = "Sign Up"

  constructor(
    public httpClient: HttpClient,private router: Router, private userService: UserService,
    private sendNotificationService: SendNotificationService,
    private settingService: SettingService
  ) {
    this.registrationForm = new FormGroup({
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      login: this.login,
      telephone: this.telephone,
      mdp: this.mdp,
      confirmmdp: this.confirmmdp
    });
  }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  register(){

    if (this.registrationForm.get('mdp').value === this.registrationForm.get('confirmmdp').value) {
      const content = {
        "nom":	this.registrationForm.get('nom').value,
        "prenom":	this.registrationForm.get('prenom').value,
        "email":	this.registrationForm.get('email').value,
        "login":	this.registrationForm.get('login').value,
        "telephone":	this.registrationForm.get('telephone').value,
        "mdp":	this.registrationForm.get('mdp').value
      }
      this.buttonAction = "Signing Up..."
      this.loadInscription = true;
      this.userService.register(content).then(
        (result) => {
          if (result) {
            this.settingService.option.title = "success";
            this.settingService.option.msg = "Compte crée avec succès vous allez être connecté(e)";
            this.sendNotificationService.addToast(this.settingService.option, "success");
            this.userService.login(content.login,content.mdp)
            this.buttonAction = "Sign Up"
            this.loadInscription = false;
          } else {
            this.settingService.option.title = "error";
            this.settingService.option.msg = "Une erreur est survenue, veuillez réessayer";
            this.sendNotificationService.addToast(this.settingService.option, "warning");
            this.buttonAction = "Sign Up"
            this.loadInscription = false;
          }
        },
        (err) => {
          this.settingService.option.title = "error";
          this.settingService.option.msg = "Nous rencontrons un problème";
          this.sendNotificationService.addToast(this.settingService.option, "error");
          this.buttonAction = "Sign Up"
          this.loadInscription = false;
        }
      );
    } else {
      this.settingService.option.title = "Invalid Credentials";
      this.settingService.option.msg = "les deux mots de passe sont differents";
      this.sendNotificationService.addToast(this.settingService.option, "error");
    }
  }

}
