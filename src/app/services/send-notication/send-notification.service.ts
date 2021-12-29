import { Injectable } from '@angular/core';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';

@Injectable({
  providedIn: 'root'
})
export class SendNotificationService {

  constructor(private toastyService: ToastyService) { }
  
  position = 'top-right';

  addToast(options, type:any) {
    if (options.closeOther) {
        this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
        title: options.title,
        msg: options.msg,
        showClose: options.showClose,
        timeout: options.timeout,
        theme: options.theme,
        onAdd: (toast: ToastData) => {
            /* added */
        },
        onRemove: (toast: ToastData) => {
            /* removed */
        }
    };

    switch (type) {
        case 'default':
            this.toastyService.default(toastOptions);
            break;
        case 'info':
            this.toastyService.info(toastOptions);
            break;
        case 'success':
            this.toastyService.success(toastOptions);
            break;
        case 'wait':
            this.toastyService.wait(toastOptions);
            break;
        case 'error':
            this.toastyService.error(toastOptions);
            break;
        case 'warning':
            this.toastyService.warning(toastOptions);
        break;
    }
  }

}
