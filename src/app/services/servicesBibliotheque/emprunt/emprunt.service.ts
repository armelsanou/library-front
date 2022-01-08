import { SettingService } from './../../setting/setting.service';
import { Router } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpruntService {

  error: {};
  reponse: any;
  errorData: {};

  constructor(
    private settingService : SettingService,
    private httpclient : HttpClient,
    private router: Router
  ) { }

  getApiEmpruntUrl(){
    return this.settingService.getApiDomain()+"/emprunt";
  }

  emprunterLivre(isbn, idLecteur) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
      const body = {
        "isbn": isbn,
        "idLecteur": idLecteur
      }
      this.httpclient.post(this.getApiEmpruntUrl(), body, httpOptions).pipe(
        catchError(this.handleError)
      ).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
  
  avertirLecteur(isbn, idLecteur, dateEmprunt) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
      const body = {
        "isbn": isbn,
        "idLecteur": idLecteur,
        "dateEmprunt": dateEmprunt
      }
      this.httpclient.patch(this.getApiEmpruntUrl()+"/avertir", body, httpOptions).pipe(
        catchError(this.handleError)
      ).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
  
  remettreLivre(isbn, idLecteur, dateEmprunt) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
      const body = {
        "isbn": isbn,
        "idLecteur": idLecteur,
        "dateEmprunt": dateEmprunt
      }
      this.httpclient.patch(this.getApiEmpruntUrl()+"/remettre", body, httpOptions).pipe(
        catchError(this.handleError)
      ).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getListEmprunts(){
    return this.httpclient.get<any[]>(this.getApiEmpruntUrl()+"s");
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
