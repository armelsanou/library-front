import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Welcome ! BiblioUparis';
  position = 'top-right';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.goToHome();
    localStorage.removeItem("cat");
  }

  goToHome(){
    this.router.navigate(['components/home']);
  }

  goToToLogin(){
    this.router.navigate(['auth/login/simple']);
  }

}
