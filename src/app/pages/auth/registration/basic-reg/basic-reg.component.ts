import { FileUploadService } from './../../../../services/servicesBibliotheque/file-upload/file-upload.service';
import { SettingService } from './../../../../services/setting/setting.service';
import { SendNotificationService } from './../../../../services/send-notication/send-notification.service';
import { UserService } from './../../../../services/servicesBibliotheque/user/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-basic-reg',
  templateUrl: './basic-reg.component.html',
  styleUrls: ['./basic-reg.component.scss']
})
export class BasicRegComponent implements OnInit {

  @ViewChild("image", {static: false}) image: ElementRef;
  error: {};
  registrationForm: FormGroup;
  nom = new FormControl('', [Validators.required]);
  img = new FormControl('');
  prenom = new FormControl('');
  email = new FormControl('', [Validators.required]);
  login = new FormControl('', [Validators.required]);
  telephone = new FormControl('');
  mdp = new FormControl('', [Validators.required]);
  confirmmdp = new FormControl('', [Validators.required]);
  loadInscription = false;
  buttonAction = "Sign Up"
  avatar: any;

  constructor(
    public httpClient: HttpClient,private router: Router, private userService: UserService,
    private sendNotificationService: SendNotificationService,
    private settingService: SettingService,
    private fileUploadService: FileUploadService
  ) {
    this.registrationForm = new FormGroup({
      nom: this.nom,
      img: this.img,
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
    $(document).ready(function() {
      var readURL = function(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e:any) {
            $('.profile-pic').attr('src', e.target.result);
          }
  
          reader.readAsDataURL(input.files[0]);
        }
      }
      
  
      $(".file-upload").on('change', function(){
        readURL(this);
      });
      
      $(".upload-button").on('click', function() {
        $(".file-upload").click();
      });
    });
  }

  register(){
    if (this.registrationForm.get('mdp').value === this.registrationForm.get('confirmmdp').value) {
      const content = {
        "nom":	this.registrationForm.get('nom').value,
        "prenom":	this.registrationForm.get('prenom').value,
        "email":	this.registrationForm.get('email').value,
        "login":	this.registrationForm.get('login').value,
        "telephone":	this.registrationForm.get('telephone').value,
        "mdp":	this.registrationForm.get('mdp').value,
        "image": this.avatar
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

  uploadFile(event) {
    const file = event.target.files[0];
    this.avatar = file.name;
    console.log('avaar', this.avatar);
    this.registrationForm.get('img').setValue(file); //this line is mandatory
  }

  upload() {
    var formData: any = new FormData();
    formData.append("file", this.registrationForm.get('img').value);
    this.fileUploadService.upload(formData).subscribe(
      (response) => this.register(),
      (error) => (err) => {
        this.error = 'Une erreur est survenue l image n a pas été correctement chargée.';
        this.settingService.option.title = "error";
        this.settingService.option.msg = this.error;
        this.sendNotificationService.addToast(this.settingService.option, "warning");
      }
    );
  }

}
