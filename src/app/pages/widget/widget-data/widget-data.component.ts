import {Component, Directive, ElementRef, HostListener, OnInit} from '@angular/core';

declare const $: any;
import '../../../../../node_modules/peity/jquery.peity.min.js';

@Component({
  selector: 'app-widget-data',
  templateUrl: './widget-data.component.html',
  styleUrls: ['./widget-data.component.scss']
})
export class WidgetDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('span.last-week-report, span.last-month-report').peity('pie', {
      fill: ['#4680FE', '#93BE52', '#FC6180', '#FFB64D']
    });

    $('span.visitor1').peity('line', {
      fill: 'rgba(70, 128, 254,0.2)',
      stroke: 'rgb(70, 128, 254)',
      width: '100px'
    });

    $('span.visitor2').peity('line', {
      fill: 'rgba(252, 97, 128,0.2)',
      stroke: 'rgb(252, 97, 128)',
      width: '100px'
    });

    $('span.visitor3').peity('line', {
      fill: 'rgba(147, 190, 82,0.2)',
      stroke: 'rgb(147, 190, 82)',
      width: '100px'
    });

    $('span.visitor4').peity('line', {
      fill: 'rgba(255, 182, 77,0.2)',
      stroke: 'rgb(255, 182, 77)',
      width: '100px'
    });

    $('span.visitor5').peity('line', {
      fill: 'rgba(254, 138, 125,0.2)',
      stroke: 'rgb(254, 138, 125)',
      width: '100px'
    });

    $('span.pie_1').peity('pie', {
      fill: ['#D9D9D9', '#4680FE']
    });

    $('span.pie_2').peity('pie', {
      fill: ['#D9D9D9', '#FC6180']
    });

    $('span.pie_3').peity('pie', {
      fill: ['#D9D9D9', '#93BE52']
    });

    $('span.pie_4').peity('pie', {
      fill: ['#D9D9D9', '#FFB64D']
    });

    $('span.pie_5').peity('pie', {
      fill: ['#D9D9D9', '#69CEC6']
    });
  }

  onTaskStatusChange(event) {
    const parentNode = (event.target.parentNode.parentNode);
    parentNode.classList.toggle('done-task');
  }

}

@Directive({
  selector: '.delete_todolist'
})
export class WidgetDataDirective {
  constructor(private el: ElementRef) { }
  @HostListener('click') onClick() {
    const parentEle = this.el.nativeElement.parentElement.parentNode;
    parentEle.remove();
  }
}
