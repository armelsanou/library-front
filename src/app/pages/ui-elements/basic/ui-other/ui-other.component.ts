import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-other',
  templateUrl: './ui-other.component.html',
  styleUrls: ['./ui-other.component.scss']
})
export class UiOtherComponent implements OnInit {
  public maxSize = 5;
  public bigTotalItems = 175;

  public totalItems = 64;
  public pageAdvance = 1;

  constructor() { }

  ngOnInit() {
  }

}
