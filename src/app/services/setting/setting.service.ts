import { Injectable } from '@angular/core';
import { ToastData } from 'ng2-toasty';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  public option: any =  { 
    title: "",
    msg: "",
    showClose: true,
    timeout: 5000,
    theme: "bootsrap",
    onAdd: (toast: ToastData) => {
        /* added */
    },
    onRemove: (toast: ToastData) => {
        /* removed */
    }
  };

  public domain =   'http://localhost:8081';

  constructor() { }

  getDomaine(){
    return this.domain;
  }

  getApiDomain(){
    return this.domain + '/api'
  }

  getApiDomainImageLocation(){
    return this.getApiDomain()+'/uploadFile'
  }

  getApiDomainImageUploadedLocation(){
    return this.getApiDomain()+'/downloadFile'
  }

}
