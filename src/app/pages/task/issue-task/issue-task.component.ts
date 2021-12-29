import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
declare var $: any;

export class TaskIssue {
  type: string;
  id: number;
  description: string;
  date: any;
  priority: string;
  assigned: string;
  status: string;
}

@Component({
  selector: 'app-issue-task',
  templateUrl: './issue-task.component.html',
  styleUrls: ['./issue-task.component.scss']
})
export class IssueTaskComponent implements OnInit {
  public data: Observable<TaskIssue>;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(public httpClient: HttpClient) { }

  ngOnInit() {
    this.data = this.httpClient.get<TaskIssue>(`assets/data/issue-list.json`);

    let progression1 = 0;
    const progress = setInterval(() => {
      $('.progress .issue-text1').text(progression1 + '%');
      $('.progress .issue-text1').css({ 'left': progression1 + '%' });
      $('.progress .issue-text1').css({ 'top': '-20px' });
      $('.progress .issue-bar1').css({ 'width': progression1 + '%' });
      if (progression1 === 70) {
        clearInterval(progress);
      } else {
        progression1 += 1;
      }

    }, 100);
    setTimeout(() => {
      $('.pie-chart').sparkline([1, 1, 1], {
        type: 'pie',
        width: '150px',
        height: '150px',
        sliceColors: ['#3366CC', '#DC3912', '#FF9900'],
        tooltipClassname: 'chart-sparkline'
      });

      $('.pie-chart1').sparkline([5, 1, 3], {
        type: 'pie',
        width: '150px',
        height: '150px',
        sliceColors: ['#3366CC', '#DC3912', '#FF9900'],
        tooltipClassname: 'chart-sparkline'
      });
    }, 1);
  }

}
