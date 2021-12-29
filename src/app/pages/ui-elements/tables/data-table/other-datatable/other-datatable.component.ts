import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';

export class OtherData {
  name: string;
  position: string;
  office: string;
  age: number;
  date: any;
  salary: string;
}

@Component({
  selector: 'app-other-datatable',
  templateUrl: './other-datatable.component.html',
  styleUrls: ['./other-datatable.component.scss']
})
export class OtherDatatableComponent implements OnInit {
  public data: Observable<OtherData>;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(public httpClient: HttpClient) { }

  ngOnInit() {
    this.data = this.httpClient.get<OtherData>(`assets/data/data.json`);
  }

}
