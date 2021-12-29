import { Router } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SettingService } from '../../setting/setting.service';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  error: {};
  reponse: any;
  errorData: {};
  user = {
    "idLecteur" : "",
    "role" : "",
    "nom" : "",
    "prenom" : "",
    "login" : "",
    "email" : "",
    "telephone" :"",
    "image" : ""
  };

  constructor(
    private settingService : SettingService,
    private httpclient : HttpClient,
    private router: Router
  ) { }

  getApiLecteurUrl(){
    return this.settingService.getApiDomain()+"/lecteur";
  }

  login(login,password){
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
      const body = {
        'login': login,
        'mdp': password
      }
      console.log("body", body);
      this.httpclient.post(this.settingService.getApiDomain()+"/login", body, httpOptions).pipe(
        catchError(this.handleError)
      ).subscribe(res => {
        if (res) {
          this.setUser(res);
          this.router.navigate(['components/my-profile']);
        }
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['components/home']);
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user'));
  }

  setUser(lecteur: any){
    this.user.idLecteur = lecteur.idLecteur;
    this.user.role = lecteur.role;
    this.user.nom = lecteur.nom;
    this.user.prenom = lecteur.prenom;
    this.user.login = lecteur.login;
    this.user.email = lecteur.email;
    this.user.telephone = lecteur.telephone;
    this.user.image = lecteur.image;
    localStorage.setItem("user", JSON.stringify(this.user));
  }

  isLoggedIn() {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }

  register(lecteur) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
      this.httpclient.post(this.getApiLecteurUrl(), lecteur, httpOptions).pipe(
        catchError(this.handleError)
      ).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  updateLecteur(content) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
      this.httpclient.put(this.getApiLecteurUrl(), content, httpOptions).pipe(
        catchError(this.handleError)
      ).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  deleteLecteur(idLecteur) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
      this.httpclient.delete(this.getApiLecteurUrl()+"/"+idLecteur, httpOptions).pipe(
        catchError(this.handleError)
      ).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getListLecteurs(){
    return this.httpclient.get<any[]>(this.getApiLecteurUrl()+"s");
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
        alert(error.error.message);
        // A client-side or network error occurred. Handle it accordingly.
        console.error('Une erreur est survenue:', error.error.message);
    } else {
        //error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    this.errorData = {
        errorTitle: 'Oops! Échec de la demande.',
        errorDesc: 'Quelque chose de terrible est arrivé. Veuillez réessayer plus tard.'
    };
    return throwError(this.errorData);
  }

}
