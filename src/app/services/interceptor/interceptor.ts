import { SendNotificationService } from './../send-notication/send-notification.service';
import { SettingService } from './../setting/setting.service';
import { UserService } from './../servicesBibliotheque/user/user.service';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import 'rxjs/add/operator/do';

@Injectable()

export class Interceptor implements HttpInterceptor {

  constructor(private userService: UserService, private router: Router, private settingService : SettingService, private sendNotificationService: SendNotificationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== 'GET') {
      return next.handle(req);
    }
  
    if (this.userService.isLoggedIn()) {
      req = req.clone({
        setHeaders:
            {Authorization: "yes is authorize",
            }
        }
      );
    }

    return next.handle(req) .do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.userService.logout();
            this.router.navigate(['auth/login/simple']);
          }
        }else{
          this.userService.logout();
          this.router.navigate(['auth/login/simple']);
          this.settingService.option.title = "error";
          this.settingService.option.msg = "Vous devez vous connecter pour continuer";
          this.sendNotificationService.addToast(this.settingService.option, "error");
        }
      }
    );
  }
}