import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { SettingService } from "../../setting/setting.service";

@Injectable({
  providedIn: "root",
})
export class RayonService {
  error: {};
  reponse: any;
  errorData: {};

  constructor(
    private settingService: SettingService,
    private httpclient: HttpClient
  ) {}

  getApiRayonUrl() {
    return this.settingService.getApiDomain() + "/rayon";
  }

  createRayon(idCategorie,libelle) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
      };
      const body = {
        "idCategorie": idCategorie,
        "libelle": libelle,
      };
      this.httpclient
        .post(this.getApiRayonUrl(), body, httpOptions)
        .pipe(catchError(this.handleError))
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  updateRayon(content) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
      };
      this.httpclient
        .put(this.getApiRayonUrl(), content, httpOptions)
        .pipe(catchError(this.handleError))
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  deleteRayon(idRayon) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
      };
      this.httpclient
        .delete(this.getApiRayonUrl()+"/"+idRayon, httpOptions)
        .pipe(catchError(this.handleError))
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  getListRayons() {
    return this.httpclient.get<any[]>(this.getApiRayonUrl() + "s");
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      alert(error.error.message);
      // A client-side or network error occurred. Handle it accordingly.
      console.error("Une erreur est survenue:", error.error.message);
    } else {
      //error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }

    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: "Oops! Échec de la demande.",
      errorDesc:
        "Quelque chose de terrible est arrivé. Veuillez réessayer plus tard.",
    };
    return throwError(this.errorData);
  }
}
