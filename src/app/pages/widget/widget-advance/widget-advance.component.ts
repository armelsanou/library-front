import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/gauge.js';
import '../../../../assets/charts/amchart/pie.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/ammap.js';
import '../../../../assets/charts/amchart/worldLow.js';

declare const $: any;
declare const AmCharts: any;
import '../../../../../node_modules/peity/jquery.peity.min.js';

@Component({
  selector: 'app-widget-advance',
  templateUrl: './widget-advance.component.html',
  styleUrls: [
    './widget-advance.component.scss',
    '../../../../assets/charts/radial/radial.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class WidgetAdvanceComponent implements OnInit {
  totalValueGraphData1 = buildChartJS('#fff', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], '#3a73f1', 'transparent');
  totalValueGraphData2 = buildChartJS('#fff', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], '#e55571', 'transparent');
  totalValueGraphData3 = buildChartJS('#fff', [5, 35, 45, 20, 10, 30, 15, 45, 15, 10], '#83a84c', 'transparent');
  totalValueGraphData4 = buildChartJS('#E99F36', [25, 35, 45, 20, 25, 30, 15, 45, 15, 1], '#E99F36', 'transparent');
  totalValueGraphOption = buildChartOption();

  designGraph1 = buildStackChartJS('#fff', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], 'transparent');
  designGraph2 = buildStackChartJS('#fff', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], 'transparent');
  designGraph3 = buildStackChartJS('#fff', [66, 60, 50, 55, 20, 55, 10, 35, 15, 25], 'transparent');
  designGraphOption = buildChartOption();

  orderCardChart1 = buildChartJS('#4680FE', [5, 35, 45, 20, 10, 30, 15, 45, 15, 10], '#fff', 'transparent');
  orderCardChart2 = buildChartJS('#FC6180', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], '#fff', 'transparent');
  orderCardChart3 = buildChartJS('#FFB64D', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], '#fff', 'transparent  ');
  orderCardChartOption = buildChartOption();

  powerCardChart1 = buildChartJS('#4680FE', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], '#fff', 'transparent');
  powerCardChart2 = buildChartJS('#FC6180', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], '#fff', 'transparent');
  powerCardChart3 = buildChartJS('#FFB64D', [5, 35, 45, 20, 10, 30, 15, 45, 15, 10], '#fff', 'transparent');
  powerCardChartOption = buildChartOption();

  clientMapChart1 = buildChartJS('#4680FE', [5, 35, 45, 20, 10, 30, 15, 45, 15, 10], '#fff', 'transparent');
  clientMapChart2 = buildChartJS('#FC6180', [35, 10, 35, 20, 47, 20, 15, 45, 15, 10], '#fff', 'transparent');
  clientMapChart3 = buildChartJS('#FFB64D', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], '#fff', 'transparent');
  clientMapChartOption = buildChartOption();

  StockProceChartData = buildChartJS('#FC6180', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], '#fff', 'transparent');
  StockProceChartOption = buildChartOption();

  summaryChartData = buildChartJS('#93BE52', [66, 60, 50, 55, 20, 55, 10, 35, 15, 25], '#fff', 'transparent');
  summaryChartOption = buildChartOption();

  constructor() { }

  ngOnInit() {
    const barw = $('#total-value-graph-4').width();
    $('#total-value-graph-4').sparkline([5, 6, 7, 4, 9, 5, 7, 5, 6, 8, 6, 5, 8, 4, 9, 5, 7, 5, 6, 8, 6, 5, 0], {
      type: 'bar',
      barWidth: barw / 24,
      height: '183px',
      tooltipClassname: 'chart-sparkline',
      barColor: '#e99f36'
    });

    AmCharts.makeChart('visitor-list-graph', {
      'type': 'serial',

      'theme': 'light',
      'dataDateFormat': 'YYYY-MM-DD',
      'precision': 2,
      'valueAxes': [{
        'id': 'v1',
        'title': 'Visitors',
        'position': 'left',
        'autoGridCount': false,
        'labelFunction': function(value) {
          return '$' + Math.round(value) + 'M';
        }
      }, {
        'id': 'v2',
        'title': 'New Visitors',
        'gridAlpha': 0,
        'position': 'right',
        'autoGridCount': false
      }],
      'graphs': [{
        'id': 'g3',
        'valueAxis': 'v1',
        'lineColor': '#9BBAFF',
        'fillColors': '#9BBAFF',
        'fillAlphas': 1,
        'type': 'column',
        'title': 'old Visitor',
        'valueField': 'sales2',
        'clustered': false,
        'columnWidth': 0.5,
        'legendValueText': '$[[value]]M',
        'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
      }, {
        'id': 'g4',
        'valueAxis': 'v1',
        'lineColor': '#4680ff',
        'fillColors': '#4680ff',
        'fillAlphas': 1,
        'type': 'column',
        'title': 'New visitor',
        'valueField': 'sales1',
        'clustered': false,
        'columnWidth': 0.3,
        'legendValueText': '$[[value]]M',
        'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
      }, {
        'id': 'g1',
        'valueAxis': 'v2',
        'bullet': 'round',
        'bulletBorderAlpha': 1,
        'bulletColor': '#FFFFFF',
        'bulletSize': 5,
        'hideBulletsCount': 50,
        'lineThickness': 2,
        'lineColor': '#93be52',
        'type': 'smoothedLine',
        'title': 'Last Month Visitor',
        'useLineColorForBulletBorder': true,
        'valueField': 'market1',
        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
      }, {
        'id': 'g2',
        'valueAxis': 'v2',
        'bullet': 'round',
        'bulletBorderAlpha': 1,
        'bulletColor': '#FFFFFF',
        'bulletSize': 5,
        'hideBulletsCount': 50,
        'lineThickness': 2,
        'lineColor': '#FC6180',
        // 'type': 'smoothedLine',
        'dashLength': 5,
        'title': 'Average Visitor',
        'useLineColorForBulletBorder': true,
        'valueField': 'market2',
        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
      }],
      'chartCursor': {
        'pan': true,
        'valueLineEnabled': true,
        'valueLineBalloonEnabled': true,
        'cursorAlpha': 0,
        'valueLineAlpha': 0.2
      },
      'categoryField': 'date',
      'categoryAxis': {
        'parseDates': true,
        'dashLength': 1,
        'minorGridEnabled': true
      },
      'legend': {
        'useGraphSettings': true,
        'position': 'top'
      },
      'balloon': {
        'borderThickness': 1,
        'cornerRadius': 5,
        'shadowAlpha': 0
      },
      'dataProvider': [{
        'date': '2013-01-16',
        'market1': 71,
        'market2': 75,
        'sales1': 5,
        'sales2': 8
      }, {
        'date': '2013-01-17',
        'market1': 74,
        'market2': 78,
        'sales1': 4,
        'sales2': 6
      }, {
        'date': '2013-01-18',
        'market1': 78,
        'market2': 88,
        'sales1': 5,
        'sales2': 2
      }, {
        'date': '2013-01-19',
        'market1': 85,
        'market2': 89,
        'sales1': 8,
        'sales2': 9
      }, {
        'date': '2013-01-20',
        'market1': 82,
        'market2': 89,
        'sales1': 9,
        'sales2': 6
      }, {
        'date': '2013-01-21',
        'market1': 83,
        'market2': 85,
        'sales1': 3,
        'sales2': 5
      }, {
        'date': '2013-01-22',
        'market1': 88,
        'market2': 92,
        'sales1': 5,
        'sales2': 7
      }, {
        'date': '2013-01-23',
        'market1': 85,
        'market2': 90,
        'sales1': 7,
        'sales2': 6
      }, {
        'date': '2013-01-24',
        'market1': 85,
        'market2': 91,
        'sales1': 9,
        'sales2': 5
      }, {
        'date': '2013-01-25',
        'market1': 80,
        'market2': 84,
        'sales1': 5,
        'sales2': 8
      }, {
        'date': '2013-01-26',
        'market1': 87,
        'market2': 92,
        'sales1': 4,
        'sales2': 8
      }, {
        'date': '2013-01-27',
        'market1': 84,
        'market2': 87,
        'sales1': 3,
        'sales2': 4
      }, {
        'date': '2013-01-28',
        'market1': 83,
        'market2': 88,
        'sales1': 5,
        'sales2': 7
      }, {
        'date': '2013-01-29',
        'market1': 84,
        'market2': 87,
        'sales1': 5,
        'sales2': 8
      }, {
        'date': '2013-01-30',
        'market1': 81,
        'market2': 85,
        'sales1': 4,
        'sales2': 7
      }]
    });
    AmCharts.makeChart('area-custom', {
      'type': 'serial',
      'theme': 'light',

      'marginRight': 0,
      'marginLeft': 40,
      'autoMarginOffset': 20,
      'dataDateFormat': 'YYYY-MM-DD',
      'valueAxes': [{
        'id': 'v1',
        'axisAlpha': 0,
        'lineAlpha': 0,
        'gridAlpha': 0,
        'position': 'left',
        'ignoreAxisWidth': true
      }],
      'balloon': {
        'borderThickness': 1,
        'shadowAlpha': 0
      },
      'graphs': [{
        'id': 'g1',
        'balloon': {
          'drop': true,
          'adjustBorderColor': false,
          'color': '#ffffff',
          'type': 'smoothedLine'
        },
        'fillAlphas': 0.2,
        'bullet': 'round',
        'bulletBorderAlpha': 1,
        'bulletColor': '#FFFFFF',
        'bulletSize': 5,
        'hideBulletsCount': 50,
        'lineThickness': 2,
        'type': 'smoothedLine',
        'lineColor': '#4680ff',
        'title': 'red line',
        'useLineColorForBulletBorder': true,
        'valueField': 'value',
        'balloonText': '<span style="font-size:18px;">[[value]]</span>'
      }],
      'chartCursor': {
        'valueLineEnabled': false,
        'valueLineBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false,
        'valueZoomable': false,
        'valueLineAlpha': 0.5
      },
      'categoryField': 'date',
      'categoryAxis': {
        'parseDates': false,
        'dashLength': 1,
        'minorGridEnabled': false,
        'axisAlpha': 0,
        'fontSize': 0,
        'lineAlpha': 0,
        'gridAlpha': 0,
      },
      'dataProvider': [{
        'date': '2012-07-27',
        'value': 13
      }, {
        'date': '2012-07-28',
        'value': 11
      }, {
        'date': '2012-07-29',
        'value': 15
      }, {
        'date': '2012-07-30',
        'value': 16
      }, {
        'date': '2012-07-31',
        'value': 18
      }, {
        'date': '2012-08-01',
        'value': 13
      }, {
        'date': '2012-08-02',
        'value': 22
      }, {
        'date': '2012-08-03',
        'value': 23
      }, {
        'date': '2012-08-04',
        'value': 20
      }, {
        'date': '2012-08-05',
        'value': 17
      }, {
        'date': '2012-08-06',
        'value': 16
      }, {
        'date': '2012-08-07',
        'value': 18
      }, {
        'date': '2012-08-08',
        'value': 21
      }, {
        'date': '2012-08-09',
        'value': 26
      }, {
        'date': '2012-08-10',
        'value': 24
      }, {
        'date': '2012-08-11',
        'value': 29
      }, {
        'date': '2012-08-12',
        'value': 32
      }, {
        'date': '2012-08-13',
        'value': 18
      }, {
        'date': '2012-08-14',
        'value': 24
      }, {
        'date': '2012-08-15',
        'value': 22
      }, {
        'date': '2012-08-16',
        'value': 18
      }, {
        'date': '2012-08-17',
        'value': 19
      }, {
        'date': '2012-08-18',
        'value': 14
      }, {
        'date': '2012-08-19',
        'value': 15
      }, {
        'date': '2012-08-20',
        'value': 12
      }, {
        'date': '2012-08-21',
        'value': 8
      }, {
        'date': '2012-08-22',
        'value': 9
      }, {
        'date': '2012-08-23',
        'value': 8
      }, {
        'date': '2012-08-24',
        'value': 7
      }, {
        'date': '2012-08-25',
        'value': 5
      }, {
        'date': '2012-08-26',
        'value': 11
      }, {
        'date': '2012-08-27',
        'value': 13
      }, {
        'date': '2012-08-28',
        'value': 18
      }, {
        'date': '2012-08-29',
        'value': 20
      }, {
        'date': '2012-08-30',
        'value': 29
      }, {
        'date': '2012-08-31',
        'value': 33
      }, {
        'date': '2012-09-01',
        'value': 42
      }, {
        'date': '2012-09-02',
        'value': 35
      }, {
        'date': '2012-09-03',
        'value': 31
      }, {
        'date': '2012-09-04',
        'value': 47
      }, {
        'date': '2012-09-05',
        'value': 52
      }, {
        'date': '2012-09-06',
        'value': 46
      }, {
        'date': '2012-09-07',
        'value': 41
      }, {
        'date': '2012-09-08',
        'value': 43
      }, {
        'date': '2012-09-09',
        'value': 40
      }, {
        'date': '2012-09-10',
        'value': 39
      }, {
        'date': '2012-09-11',
        'value': 34
      }, {
        'date': '2012-09-12',
        'value': 29
      }, {
        'date': '2012-09-13',
        'value': 34
      }, {
        'date': '2012-09-14',
        'value': 37
      }, {
        'date': '2012-09-15',
        'value': 42
      }, {
        'date': '2012-09-16',
        'value': 49
      }]
    });
    AmCharts.makeChart('area-custom-2', {
      'type': 'serial',
      'theme': 'light',

      'marginRight': 0,
      'marginLeft': 40,
      'autoMarginOffset': 20,
      'dataDateFormat': 'YYYY-MM-DD',
      'valueAxes': [{
        'id': 'v1',
        'axisAlpha': 0,
        'lineAlpha': 0,
        'gridAlpha': 0,
        'position': 'left',
        'ignoreAxisWidth': true
      }],
      'balloon': {
        'borderThickness': 1,
        'shadowAlpha': 0
      },
      'graphs': [{
        'id': 'g1',
        'balloon': {
          'drop': true,
          'adjustBorderColor': false,
          'color': '#ffffff',
          'type': 'smoothedLine'
        },
        'fillAlphas': 0.2,
        'bullet': 'round',
        'bulletBorderAlpha': 1,
        'bulletColor': '#FFFFFF',
        'bulletSize': 5,
        'hideBulletsCount': 50,
        'lineThickness': 2,
        'type': 'smoothedLine',
        'lineColor': '#FC6180',
        'title': 'red line',
        'useLineColorForBulletBorder': true,
        'valueField': 'value',
        'balloonText': '<span style="font-size:18px;">[[value]]</span>'
      }],
      'chartCursor': {
        'valueLineEnabled': false,
        'valueLineBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false,
        'valueZoomable': false,
        'valueLineAlpha': 0.5
      },
      'categoryField': 'date',
      'categoryAxis': {
        'parseDates': false,
        'dashLength': 1,
        'minorGridEnabled': false,
        'axisAlpha': 0,
        'fontSize': 0,
        'lineAlpha': 0,
        'gridAlpha': 0,
      },
      'dataProvider': [{
        'date': '2012-11-13',
        'value': 80
      }, {
        'date': '2012-11-14',
        'value': 81
      }, {
        'date': '2012-11-15',
        'value': 87
      }, {
        'date': '2012-11-16',
        'value': 82
      }, {
        'date': '2012-11-17',
        'value': 86
      }, {
        'date': '2012-11-18',
        'value': 80
      }, {
        'date': '2012-11-19',
        'value': 87
      }, {
        'date': '2012-11-20',
        'value': 83
      }, {
        'date': '2012-11-21',
        'value': 85
      }, {
        'date': '2012-11-22',
        'value': 84
      }, {
        'date': '2012-11-23',
        'value': 82
      }, {
        'date': '2012-11-24',
        'value': 73
      }, {
        'date': '2012-11-25',
        'value': 71
      }, {
        'date': '2012-11-26',
        'value': 75
      }, {
        'date': '2012-11-27',
        'value': 79
      }, {
        'date': '2012-11-28',
        'value': 70
      }, {
        'date': '2012-11-29',
        'value': 73
      }, {
        'date': '2012-11-30',
        'value': 61
      }, {
        'date': '2012-12-01',
        'value': 62
      }, {
        'date': '2012-12-02',
        'value': 66
      }, {
        'date': '2012-12-03',
        'value': 65
      }, {
        'date': '2012-12-04',
        'value': 73
      }, {
        'date': '2012-12-05',
        'value': 79
      }, {
        'date': '2012-12-06',
        'value': 78
      }, {
        'date': '2012-12-07',
        'value': 78
      }, {
        'date': '2012-12-08',
        'value': 78
      }, {
        'date': '2012-12-09',
        'value': 74
      }, {
        'date': '2012-12-10',
        'value': 73
      }, {
        'date': '2012-12-11',
        'value': 75
      }, {
        'date': '2012-12-12',
        'value': 70
      }, {
        'date': '2012-12-13',
        'value': 77
      }, {
        'date': '2012-12-14',
        'value': 67
      }, {
        'date': '2012-12-15',
        'value': 62
      }, {
        'date': '2012-12-16',
        'value': 64
      }, {
        'date': '2012-12-17',
        'value': 61
      }, {
        'date': '2012-12-18',
        'value': 59
      }, {
        'date': '2012-12-19',
        'value': 53
      }, {
        'date': '2012-12-20',
        'value': 54
      }, {
        'date': '2012-12-21',
        'value': 56
      }, {
        'date': '2012-12-22',
        'value': 59
      }, {
        'date': '2012-12-23',
        'value': 58
      }, {
        'date': '2012-12-24',
        'value': 55
      }, {
        'date': '2012-12-25',
        'value': 52
      }, {
        'date': '2012-12-26',
        'value': 54
      }, {
        'date': '2012-12-27',
        'value': 50
      }, {
        'date': '2012-12-28',
        'value': 50
      }, {
        'date': '2012-12-29',
        'value': 51
      }, {
        'date': '2012-12-30',
        'value': 52
      }, {
        'date': '2012-12-31',
        'value': 58
      }, {
        'date': '2013-01-01',
        'value': 60
      }, {
        'date': '2013-01-02',
        'value': 67
      }, {
        'date': '2013-01-03',
        'value': 64
      }, {
        'date': '2013-01-04',
        'value': 66
      }, {
        'date': '2013-01-05',
        'value': 60
      }, {
        'date': '2013-01-06',
        'value': 63
      }, {
        'date': '2013-01-07',
        'value': 61
      }, {
        'date': '2013-01-08',
        'value': 60
      }, {
        'date': '2013-01-09',
        'value': 65
      }, {
        'date': '2013-01-10',
        'value': 75
      }, {
        'date': '2013-01-11',
        'value': 77
      }, {
        'date': '2013-01-12',
        'value': 78
      }, {
        'date': '2013-01-13',
        'value': 70
      }, {
        'date': '2013-01-14',
        'value': 70
      }, {
        'date': '2013-01-15',
        'value': 73
      }, {
        'date': '2013-01-16',
        'value': 71
      }, {
        'date': '2013-01-17',
        'value': 74
      }, {
        'date': '2013-01-18',
        'value': 78
      }, {
        'date': '2013-01-19',
        'value': 85
      }, {
        'date': '2013-01-20',
        'value': 82
      }, {
        'date': '2013-01-21',
        'value': 83
      }, {
        'date': '2013-01-22',
        'value': 88
      }, {
        'date': '2013-01-23',
        'value': 85
      }, {
        'date': '2013-01-24',
        'value': 85
      }, {
        'date': '2013-01-25',
        'value': 80
      }, {
        'date': '2013-01-26',
        'value': 87
      }, {
        'date': '2013-01-27',
        'value': 84
      }, {
        'date': '2013-01-28',
        'value': 83
      }, {
        'date': '2013-01-29',
        'value': 84
      }, {
        'date': '2013-01-30',
        'value': 81
      }]
    });

    AmCharts.makeChart('Servey-chart', {
      'type': 'serial',

      'theme': 'light',
      'dataProvider': [{
        'name': 'Mon',
        'points': 5,
        'color': '#cccccc',
      }, {
        'name': 'Tue',
        'points': 8,
        'color': '#cccccc',
      }, {
        'name': 'Wed',
        'points': 7,
        'color': '#cccccc',
      }, {
        'name': 'Thu',
        'points': 6,
        'color': '#cccccc',
      }, {
        'name': 'Fri',
        'points': 8,
        'color': '#cccccc',
      }, {
        'name': 'Sat',
        'points': 9,
        'color': '#93BE52',
      }, {
        'name': 'Sun',
        'points': 10,
        'color': '#93BE52',
      }],
      'valueAxes': [{
        'maximum': 10,
        'minimum': 0,
        'axisAlpha': 0,
        'gridAlpha': 0,
        'position': 'left'
      }],
      'startDuration': 1,
      'graphs': [{
        'balloonText': '<span style="font-size:13px;">[[category]]: <b>[[value]]</b></span>',
        'bulletOffset': 10,
        'bulletSize': 52,
        'colorField': 'color',
        'cornerRadiusTop': 12,
        'fillAlphas': 0.8,
        'columnWidth': 0.5,
        'lineAlpha': 0,
        'type': 'column',
        'valueField': 'points'
      }],
      'marginTop': 0,
      'marginRight': 0,
      'marginLeft': 0,
      'marginBottom': 20,
      'autoMargins': false,
      'categoryField': 'name',
      'categoryAxis': {
        'axisAlpha': 0,
        'gridAlpha': 0,
        'inside': false,
        'tickLength': 0
      },
    });
    AmCharts.makeChart('solid-gauge1', {
      'type': 'gauge',

      'theme': 'light',
      'axes': [{
        'axisAlpha': 0,
        'tickAlpha': 0,
        'labelsEnabled': false,
        'startValue': 0,
        'endValue': 100,
        'startAngle': 0,
        'endAngle': 360,
        'bands': [{
          'color': '#E5E5E5',
          'startValue': -35,
          'endValue': 35,
          'radius': '100%',
          'innerRadius': '92%'
        }, {
          'color': '#93BE52',
          'startValue': -35,
          'endValue': 20,
          'radius': '100%',
          'innerRadius': '92%'
        }]
      }],
      'export': {
        'enabled': true
      }

    });

    let targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17';
    targetSVG += ',2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067';
    targetSVG += ',5.5,9,5.5 S12.5,7.067,12.5,9z';
    AmCharts.makeChart('world-map-vititors', {
      'type': 'map',
      'projection': 'winkel3',

      'theme': 'light',
      'imagesSettings': {
        'rollOverColor': '#FC6180',
        'rollOverScale': 3,
        'selectedScale': 3,
        'selectedColor': '#FC6180',
        'color': '#FC6180'
      },

      'areasSettings': {
        'unlistedAreasColor': '#dfdfdf',
        'outlineThickness': 0.1
      },

      'dataProvider': {
        'map': 'worldLow',
        'zoomLevel': 1,
        'zoomLongitude': 130,
        'zoomLatitude': -20,
        'images': [{
          'svgPath': targetSVG,
          'zoomLevel': 3,
          'scale': 1,
          'title': 'United State',
          'latitude': 10.6353,
          'longitude': 220.2250
        }]
      },
      'zoomControl': {
        'panControlEnabled': false,
        'zoomControlEnabled': false,
        'homeButtonEnabled': false
      },
      'export': {
        'enabled': true
      }
    });

    const plot = $.plot('#realtimeupdate', [getRandomData()], {
      series: {
        shadowSize: 0, // Drawing is faster without shadows
        color: '#FFB64D',
      },
      lines: {
        fill: true,
        fillColor: '#FFB64D',
        borderWidth: 0,
      },
      grid: {
        borderWidth: 0,
        labelMargin: 0,
        axisMargin: 0,
        minBorderMargin: 0,
      },
      yaxis: {
        min: 0,
        max: 100,
        show: false,
      },
      xaxis: {
        show: false,
      }
    });
    setInterval(() => {
      plot.setData([getRandomData()]);
      plot.draw();
    }, 900);

    AmCharts.makeChart('fees-collection', {
      'theme': 'light',
      'type': 'serial',

      'startDuration': 2,
      'dataProvider': [{
        'country': 'Collection',
        'visits': 4025,
        'color': ' #4680ff'
      }, {
        'country': 'Fees',
        'visits': 3782,
        'color': '#FC6180'

      }, {
        'country': 'Expence',
        'visits': 3586,
        'color': '#FFB64D'

      }],
      'valueAxes': [{
        'position': 'left',
        'axisAlpha': 0,
        'title': ''
      }],
      'graphs': [{
        'balloonText': '[[category]]: <b>[[value]]</b>',
        'fillColorsField': 'color',
        'fillAlphas': 1,
        'axisAlpha': 1,
        'lineAlpha': 0.1,
        'type': 'column',
        'columnWidth': 0.5,
        'valueField': 'visits'
      }],
      'depth3D': 0,
      'angle': 0,
      'chartCursor': {
        'categoryBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false
      },
      'categoryField': 'country',
      'categoryAxis': {
        'gridPosition': 'start',
        'axisAlpha': 0,
        'gridAlpha': 0,
        'labelRotation': 0
      },
      'export': {
        'enabled': true
      }
    });
    AmCharts.makeChart('website-traffic', {
      'theme': 'light',
      'type': 'serial',

      'startDuration': 2,
      'dataProvider': [{
        'country': 'Collection',
        'visits': 3586,
        'color': ' #4680ff'
      }, {
        'country': 'Fees',
        'visits': 3782,
        'color': '#FC6180'

      }, {
        'country': 'Expence',
        'visits': 4025,
        'color': '#FFB64D'

      }],
      'valueAxes': [{
        'position': 'left',
        'gridAlpha': 0,
        'axisAlpha': 0,
        'labelsEnabled': false,
        'title': ''
      }],
      'graphs': [{
        'balloonText': '',
        'fillColorsField': 'color',
        'fillAlphas': 1,
        'axisAlpha': 1,
        'lineAlpha': 0.1,
        'type': 'column',
        'columnWidth': 0.5,
        'valueField': 'visits'
      }],
      'depth3D': 0,
      'angle': 0,
      'chartCursor': {
        'categoryBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false
      },
      'categoryField': 'country',
      'categoryAxis': {
        'gridPosition': 'start',
        'axisAlpha': 0,
        'labelsEnabled': false,
        'gridAlpha': 0,
        'labelRotation': 0
      },
      'export': {
        'enabled': true
      }
    });

    const plot_graph = $.plot('#statetics-graph1', [getRandomData()], {
      series: {
        shadowSize: 0, // Drawing is faster without shadows
        color: '#FC6180',
      },
      lines: {
        fill: true,
        fillColor: 'rgba(252, 97, 128, 0.25)',
        borderWidth: 0,
      },
      grid: {
        borderWidth: 0,
        labelMargin: 0,
        axisMargin: 0,
        minBorderMargin: 0,
      },
      yaxis: {
        min: 0,
        max: 100,
        show: true,
      },
      xaxis: {
        show: false,
      }
    });
    setInterval(() => {
      plot_graph.setData([getRandomData()]);
      plot_graph.draw();
    }, 900);

    const plot_rate = $.plot('#statetics-rate1', [getRandomData()], {
      series: {
        shadowSize: 0, // Drawing is faster without shadows
        color: '#e0e0e0',
      },
      lines: {
        fill: true,
        fillColor: '#f5f5f5',
        borderWidth: 1,
      },
      grid: {
        borderWidth: 0,
        labelMargin: 0,
        axisMargin: 0,
        minBorderMargin: 0,
      },
      yaxis: {
        min: 0,
        max: 100,
        show: false,
      },
      xaxis: {
        show: false,
      }
    });
    setInterval(() => {
      plot_rate.setData([getRandomData()]);
      plot_rate.draw();
    }, 900);

    const plot_purchase = $.plot('#statetics-purchase1', [getRandomData()], {
      series: {
        shadowSize: 0, // Drawing is faster without shadows
        color: '#e0e0e0',

      },
      lines: {
        fill: true,
        fillColor: '#f5f5f5',
        borderWidth: 1,
      },
      grid: {
        borderWidth: 0,
        labelMargin: 0,
        axisMargin: 0,
        minBorderMargin: 0,
      },
      yaxis: {
        min: 0,
        max: 100,
        show: false,
      },
      xaxis: {
        show: false,
      }
    });
    setInterval(() => {
      plot_purchase.setData([getRandomData()]);
      plot_purchase.draw();
    }, 900);

    AmCharts.makeChart('line-example', {
      'type': 'serial',
      'marginTop': 0,

      'marginRight': 0,
      'dataProvider': [{
        'year': 'Jan',
        'v1': 0.5,
        'v2': 1.5
      },
        {
          'year': 'Feb',
          'v1': 1.5,
          'v2': 1
        },
        {
          'year': 'Mar',
          'v1': 1,
          'v2': 2.5
        },
        {
          'year': 'Apr',
          'v1': 2,
          'v2': 1
        },
        {
          'year': 'May',
          'v1': 1.5,
          'v2': 2.5
        },
        {
          'year': 'Jun',
          'v1': 4,
          'v2': 3
        },
        {
          'year': 'Jul',
          'v1': 3,
          'v2': 3.5
        },
        {
          'year': 'Aug',
          'v1': 5,
          'v2': 3.5
        },
        {
          'year': 'Sap',
          'v1': 4,
          'v2': 5.5
        },
      ],
      'valueAxes': [{
        'axisAlpha': 0,
        'dashLength': 6,
        'gridAlpha': 0.1,
        'position': 'left'
      }],
      'graphs': [{
        'id': 'g1',
        'bullet': 'round',
        'bulletSize': 9,
        'lineColor': '#4680ff',
        'lineThickness': 1,
        'negativeLineColor': '#4680ff',
        'type': 'smoothedLine',
        'valueField': 'v1'
      }, {
        'id': 'g2',
        'bullet': 'round',
        'bulletSize': 9,
        'lineColor': '#93BE52',
        'lineThickness': 1,
        'negativeLineColor': '#93BE52',
        'type': 'smoothedLine',
        'valueField': 'v2'
      }],
      'chartCursor': {
        'cursorAlpha': 0,
        'valueLineEnabled': false,
        'valueLineBalloonEnabled': true,
        'valueLineAlpha': false,
        'fullWidth': true
      },
      'categoryField': 'year',
      'categoryAxis': {
        'gridAlpha': 0,
        'axisAlpha': 0,
        'fillAlpha': 1,
        'fillColor': '#FAFAFA',
        'minorGridAlpha': 0,
        'minorGridEnabled': true
      },
      'export': {
        'enabled': true
      }
    });
    AmCharts.makeChart('visitor-graph', {
      'type': 'serial',

      'theme': 'light',
      'categoryField': 'year',
      'rotate': true,
      'startDuration': 1,
      'categoryAxis': {
        'gridPosition': 'start',
        'position': 'left',
        'lineAlpha': 0,
        'gridAlpha': 0,
      },
      'trendLines': [],
      'graphs': [{
        'balloonText': 'Income:[[value]]',
        'fillAlphas': 0.8,
        'id': 'AmGraph-1',
        'lineAlpha': 0.2,
        'title': 'Income',
        'type': 'column',
        // 'fillColors': '#9BBAFF',
        'fillColors': '#fc6180',
        'valueField': 'income'
      },
        {
          'balloonText': 'Expenses:[[value]]',
          'fillAlphas': 0.8,
          'id': 'AmGraph-2',
          'lineAlpha': 0.2,
          'title': 'Expenses',
          'type': 'column',
          'fillColors': '#FFB64D',
          'valueField': 'expenses'
        }
      ],
      'guides': [],
      'valueAxes': [{
        'id': 'ValueAxis-1',

        'axisAlpha': 0
      }],
      'allLabels': [],
      'balloon': {},
      'titles': [],
      'dataProvider': [{
        'year': 2005,
        'income': 23.5,
        'expenses': 18.1
      },
        {
          'year': 2006,
          'income': 26.2,
          'expenses': 22.8
        },
        {
          'year': 2007,
          'income': 28.0,
          'expenses': 23.9
        },
        {
          'year': 2008,
          'income': 23.5,
          'expenses': 25.1
        },
        {
          'year': 2009,
          'income': 24.6,
          'expenses': 25
        },
        {
          'year': 2010,
          'income': 20.6,
          'expenses': 22
        },
        {
          'year': 2011,
          'income': 23,
          'expenses': 26
        }
      ],
    });

    AmCharts.makeChart('last-week-sales', {
      'type': 'serial',
      'theme': 'light',

      'marginRight': 0,
      'marginLeft': 0,
      'autoMarginOffset': 0,
      'dataDateFormat': 'YYYY-MM-DD',
      'valueAxes': [{
        'id': 'v1',
        'axisAlpha': 0,
        'lineAlpha': 0,
        'gridAlpha': 0,
        'fontSize': 0,
        'position': 'left',
        'ignoreAxisWidth': true
      }],
      'balloon': {
        'borderThickness': 1,
        'shadowAlpha': 0
      },
      'graphs': [{
        'id': 'g1',
        'balloon': {
          'drop': true,
          'adjustBorderColor': false,
          'color': '#FC6180',
          'type': 'smoothedLine'
        },
        'fillAlphas': 0,
        'bullet': 'round',
        'bulletBorderAlpha': 1,
        'bulletColor': '#FFFFFF',
        'bulletSize': 5,
        'hideBulletsCount': 50,
        'lineThickness': 2,
        'type': 'smoothedLine',
        'lineColor': '#fff',
        'title': 'red line',
        'useLineColorForBulletBorder': true,
        'valueField': 'value',
        'balloonText': '<span style="font-size:18px;">[[value]]</span>'
      }],
      'chartCursor': {
        'valueLineEnabled': false,
        'valueLineBalloonEnabled': false,
        'cursorAlpha': 0,
        'cursorColor': '#fff',
        'color': '#FC6180',
        'zoomable': false,
        'valueZoomable': false,
        'valueLineAlpha': 0.5
      },
      'categoryField': 'date',
      'categoryAxis': {
        'startOnAxis': true,
        'dashLength': 1,
        'minorGridEnabled': false,
        'axisAlpha': 0,
        'parseDates': true,
        'color': '#fff',
        'inside': true,
        'lineAlpha': 0,
        'gridAlpha': 0,
      },
      'dataProvider': [{
        'date': '2012-11-19',
        'value': 87
      }, {
        'date': '2012-11-20',
        'value': 83
      }, {
        'date': '2012-11-21',
        'value': 85
      }, {
        'date': '2012-11-22',
        'value': 81
      }, {
        'date': '2012-11-23',
        'value': 82
      }, {
        'date': '2012-11-24',
        'value': 79
      }, {
        'date': '2012-11-25',
        'value': 73
      }, {
        'date': '2012-11-26',
        'value': 75
      }, {
        'date': '2012-11-27',
        'value': 71
      }]
    });

    $('span#amount-processed').peity('line', {
      fill: '#4680ff',
      stroke: '#4680ff'
    });

    $('span#amount-spent').peity('line', {
      fill: 'rgb(252, 97, 128)',
      stroke: 'rgb(252, 97, 128)'
    });

    $('span#profit-processed').peity('line', {
      fill: 'rgb(255, 182, 77)',
      stroke: 'rgb(255, 182, 77)'
    });
  }

}

function buildChartJS(a, b, f, c) {
  if (f == null) {
    f = 'rgba(0,0,0,0)';
  }
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [{
      label: '',
      borderColor: a,
      borderWidth: 2,
      hitRadius: 30,
      pointHoverRadius: 4,
      pointBorderWidth: 50,
      pointHoverBorderWidth: 12,
      pointBackgroundColor: c,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: a,
      pointHoverBorderColor: 'rgba(0,0,0,0.5)',
      fill: true,
      backgroundColor: f,
      data: b,
    }]
  };
}

function buildChartOption() {
  return {
    title: {
      display: false
    },
    tooltips: {
      enabled: true,
      intersect: false,
      mode: 'nearest',
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    legend: {
      display: false,
      labels: {
        usePointStyle: false
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    hover: {
      mode: 'index'
    },
    scales: {
      xAxes: [{
        display: false,
        gridLines: false,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: false,
        gridLines: false,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        },
        ticks: {
          beginAtZero: true
        }
      }]
    },
    elements: {
      point: {
        radius: 4,
        borderWidth: 12
      }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 5,
        bottom: 0
      }
    }
  };
}

function buildStackChartJS(a, b, f) {
  if (f == null) {
    f = 'rgba(0,0,0,0)';
  }
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [{
      label: '',
      borderColor: a,
      borderWidth: 1,
      // lineTension: 0,
      hitRadius: 30,
      pointRadius: 1,
      pointHoverRadius: 4,
      pointBorderWidth: 2,
      pointHoverBorderWidth: 12,
      pointBackgroundColor: '#fff',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: a,
      pointHoverBorderColor: '#000000',
      fill: true,
      backgroundColor: f,
      data: b,
    }]
  };
}

function getRandomData() {
  let data = [];
  const totalPoints = 300;
  if (data.length > 0) {
    data = data.slice(1);
  }

  while (data.length < totalPoints) {
    const prev = data.length > 0 ? data[data.length - 1] : 50;
    let y = prev + Math.random() * 10 - 5;
    if (y < 0) {
      y = 0;
    } else if (y > 100) {
      y = 100;
    }
    data.push(y);
  }

  const res = [];
  for (let i = 0; i < data.length; ++i) {
    res.push([i, data[i]]);
  }
  return res;
}
