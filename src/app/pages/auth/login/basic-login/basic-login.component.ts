import { UserService } from './../../../../services/servicesBibliotheque/user/user.service';
import { SendNotificationService } from './../../../../services/send-notication/send-notification.service';
import { SettingService } from './../../../../services/setting/setting.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import swal from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {

  loginForm: FormGroup;
  logIn = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  loadInscription = false;
  message: {};
  buttonAction = "Log In"

  constructor(
    private sendNotificationService: SendNotificationService,
    private settingService: SettingService,
    private userService: UserService,
    private router: Router
  )
  {
    this.loginForm = new FormGroup({
      logIn: this.logIn,
      password: this.password
    });
  }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  login(){
    this.buttonAction = "Connexion..."
    this.loadInscription = true;
    this.userService.login(this.loginForm.get('logIn').value, this.loginForm.get('password').value).then(
      (result) => {
        if (result) {
          this.message = 'Connecté avec succès';
          this.settingService.option.title = "success";
          this.settingService.option.msg = this.message;
          this.sendNotificationService.addToast(this.settingService.option, "success");
          this.buttonAction = "Log In"
          this.loadInscription = false;
        } else {
          this.message = 'Login ou mot de passe incorrect. Veuillez réessayer';
          this.settingService.option.title = "Invalid credentials";
          this.settingService.option.msg = this.message;
          this.sendNotificationService.addToast(this.settingService.option, "warning");
          this.buttonAction = "Log In"
          this.loadInscription = false;
        }
      },
      (err) => {
        this.message = 'Une erreur est survenue. Veuillez réessayer';
        this.settingService.option.title = "error";
        this.settingService.option.msg = this.message;
        this.sendNotificationService.addToast(this.settingService.option, "error");
        this.buttonAction = "Log In"
        this.loadInscription = false;
      }
    );
  }

}
