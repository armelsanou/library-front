import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SettingService } from '../../setting/setting.service';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  error: {};
  reponse: any;
  errorData: {};

  constructor(
    private settingService : SettingService,
    private httpclient : HttpClient
  ) { }

  getApiCategorieUrl(){
    return this.settingService.getApiDomain()+"/categorie";
  }

  createCategorie(categorie) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
      const body = {
        'libelle': categorie.libelle,
        'image': categorie.image
      }
      this.httpclient.post(this.getApiCategorieUrl(), body, httpOptions).pipe(
        catchError(this.handleError)
      ).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  updateCategorie(content) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
      this.httpclient.put(this.getApiCategorieUrl(), content, httpOptions).pipe(
        catchError(this.handleError)
      ).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  deleteCategorie(idCategorie) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      };
      this.httpclient.delete(this.getApiCategorieUrl()+"/"+idCategorie, httpOptions).pipe(
        catchError(this.handleError)
      ).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getListCategories(){
    return this.httpclient.get<any[]>(this.getApiCategorieUrl()+"s");
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
        errorTitle: 'Oops! ??chec de la demande.',
        errorDesc: 'Quelque chose de terrible est arriv??. Veuillez r??essayer plus tard.'
    };
    return throwError(this.errorData);
  }

}
