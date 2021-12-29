import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

export class CrmContact {
  id: number;
  image: any;
  name: string;
  email: string;
  position: string;
  office: string;
  age: number;
  phone_no: string;
  date: any;
}

@Component({
  selector: 'app-crm-contact',
  templateUrl: './crm-contact.component.html',
  styleUrls: ['./crm-contact.component.scss']
})
export class CrmContactComponent implements OnInit {
  public data: Observable<CrmContact>;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(public httpClient: HttpClient) { }

  ngOnInit() {
    this.data = this.httpClient.get<CrmContact>(`assets/data/crm-contact.json`);
  }

  openMyModal(event) {
    document.querySelector('#' + event).classList.add('md-show');
  }

  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

}
