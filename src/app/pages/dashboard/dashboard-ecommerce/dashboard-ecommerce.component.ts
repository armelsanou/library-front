import { Component, OnInit } from '@angular/core';

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
  selector: 'app-dashboard-ecommerce',
  templateUrl: './dashboard-ecommerce.component.html',
  styleUrls: ['./dashboard-ecommerce.component.scss']
})
export class DashboardEcommerceComponent implements OnInit {
  gTargetHTML: string;
  gGap: string;

  constructor() { }

  ngOnInit() {
    $('span#amount-processed').peity('line', {
      fill: '#4680ff',
      stroke: '#4680ff',
      width: '100%'
    });

    $('span#amount-spent').peity('line', {
      fill: 'rgb(252, 97, 128)',
      stroke: 'rgb(252, 97, 128)',
      width: '100%'
    });

    $('span#profit-processed').peity('line', {
      fill: 'rgb(255, 182, 77)',
      stroke: 'rgb(255, 182, 77)',
      width: '100%'
    });

    AmCharts.makeChart('email-sent', {
      'type': 'serial',
      'theme': 'light',

      'dataDateFormat': 'YYYY-MM-DD',
      'precision': 2,
      'valueAxes': [{
        'id': 'v1',
        'title': 'Sales',
        'position': 'left',
        'autoGridCount': false,
        'labelFunction': function (value) {
          return Math.round(value);
        }
      }, {
        'id': 'v2',
        'title': '',
        'gridAlpha': 0,
        'fontSize': 0,
        'axesAlpha': 0,
        'position': 'left',
        'autoGridCount': false
      }],
      'graphs': [{
        'id': 'g3',
        'valueAxis': 'v1',
        'lineColor': '#4680ff',
        'fillColors': '#4680ff',
        'fillAlphas': 1,
        'type': 'column',
        'title': 'Actual Sales',
        'valueField': 'sales2',
        'clustered': true,
        'columnWidth': 0.2,
        'legendValueText': '$[[value]]M',
        'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
      }, {
        'id': 'g4',
        'valueAxis': 'v1',
        'lineColor': '#FC6180',
        'fillColors': '#FC6180',
        'fillAlphas': 1,
        'type': 'column',
        'title': 'Target Sales',
        'valueField': 'sales1',
        'clustered': true,
        'columnWidth': 0.2,
        'legendValueText': '$[[value]]M',
        'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
      }, {
        'id': 'g1',
        'valueAxis': 'v2',
        'bullet': 'round',
        'bulletBorderAlpha': 0,
        'bulletColor': 'transparent',
        'bulletSize': 0,
        'hideBulletsCount': 50,
        'lineThickness': 3,
        'dashLength': 10,
        'lineColor': '#93BE52',
        'type': 'smoothedLine',
        'title': 'Market Days',
        'useLineColorForBulletBorder': true,
        'valueField': 'market1',
        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
      }, {
        'id': 'v3',
        'valueAxis': 'v1',
        'lineColor': '#FFB64D',
        'fillColors': '#FFB64D',
        'fillAlphas': 1,
        'type': 'column',
        'title': 'Actual Sales',
        'valueField': 'sales2',
        'clustered': true,
        'columnWidth': 0.2,
        'legendValueText': '$[[value]]M',
        'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
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
        'dashLength': 0,
        'axisAlpha': 0,
        'GridAlpha': 0,
        'minorGridEnabled': true
      },
      'legend': {
        'useGraphSettings': true,
        'position': 'top'
      },
      'balloon': {
        'borderThickness': 1,
        'shadowAlpha': 0
      },
      'export': {
        'enabled': true
      },
      'dataProvider': [{
        'date': '2013-01-16',
        'market1': 91,
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
        'market1': 78,
        'market2': 92,
        'sales1': 5,
        'sales2': 7
      }]
    });

    $('span.visitor1').peity('line', {
      fill: 'rgba(70, 128, 254,0.2)',
      stroke: 'rgb(70, 128, 254)',
      width: 100
    });

    $('span.visitor2').peity('line', {
      fill: 'rgba(252, 97, 128,0.2)',
      stroke: 'rgb(252, 97, 128)',
      width: 100
    });

    $('span.visitor3').peity('line', {
      fill: 'rgba(147, 190, 82,0.2)',
      stroke: 'rgb(147, 190, 82)',
      width: 100
    });

    $('span.visitor4').peity('line', {
      fill: 'rgba(255, 182, 77,0.2)',
      stroke: 'rgb(255, 182, 77)',
      width: 100
    });

    $('span.visitor5').peity('line', {
      fill: 'rgba(254, 138, 125,0.2)',
      stroke: 'rgb(254, 138, 125)',
      width: 100
    });

    $('span.last-week-report').peity('pie', {
      fill: ['#4680FE', '#93BE52', '#FC6180', '#FFB64D']
    });

    $('span.last-month-report').peity('pie', {
      fill: ['#4680FE', '#93BE52', '#FC6180', '#FFB64D']
    });

    const plot = $.plot('#real-time-update', [getRandomData()], {
      series: {
        shadowSize: 0,
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

    $('#revenue-report').peity('bar', {
      fill: ['#93BE52', '#4680ff'],
      padding: 0.2,
      height: 100,
      width: '100%'
    });

    AmCharts.makeChart('world-map-markers', {
      'type': 'map',
      'theme': 'light',

      'dataProvider': {
        'map': 'worldLow',
        'zoomLevel': 1,
        'zoomLongitude': 102.6353,
        'zoomLatitude': 0,
      },
      'areasSettings': {
        'unlistedAreasColor': '#fc889f',
        'unlistedAreasAlpha': 0.9
      },
      'zoomControl': {
        'panControlEnabled': false,
        'zoomControlEnabled': false,
        'homeButtonEnabled': false
      },
      'backgroundZoomsToTop': true,
      'linesAboveImages': true
    });
  }

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
