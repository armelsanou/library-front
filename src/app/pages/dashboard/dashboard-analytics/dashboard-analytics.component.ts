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
  selector: 'app-dashboard-analytics',
  templateUrl: './dashboard-analytics.component.html',
  styleUrls: [
    './dashboard-analytics.component.scss',
    '../../../../assets/icon/svg-animated/svg-weather.css'
  ]
})
export class DashboardAnalyticsComponent implements OnInit {
  summaryChartData = buildChartJS('#93BE52', [66, 60, 50, 55, 20, 55, 10, 35, 15, 25], '#fff', 'transparent');
  summaryChartOption = buildChartOption();

  constructor() { }

  ngOnInit() {
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

    $('#monthly-profit-1').peity('line', {
      fill: 'rgba(70, 128, 254,0.2)',
      stroke: 'rgb(70, 128, 254)',
      height: 30,
      width: '100%'
    });

    $('#monthly-profit-2').peity('line', {
      fill: 'rgba(252, 97, 128,0.2)',
      stroke: 'rgb(252, 97, 128)',
      height: 30,
      width: '100%'
    });

    $('#monthly-profit-3').peity('line', {
      fill: 'rgba(255, 182, 77,0.2)',
      stroke: 'rgb(255, 182, 77)',
      height: 30,
      width: '100%'
    });

    $('.dial').knob({
      draw: function() {
        // 'tron' case
        if (this.$.data('skin') === 'tron') {
          this.cursorExt = 0.3;
          const a = this.arc(this.cv);
          let pa;
          const r = 1;
          this.g.lineWidth = this.lineWidth;
          if (this.o.displayPrevious) {
            pa = this.arc(this.v);
            this.g.beginPath();
            this.g.strokeStyle = this.pColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
            this.g.stroke();
          }
          this.g.beginPath();
          this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
          this.g.stroke();
          this.g.lineWidth = 2;
          this.g.beginPath();
          this.g.strokeStyle = this.o.fgColor;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
          this.g.stroke();
          return false;
        }
      }
    });

    let targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17';
    targetSVG += ',2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067';
    targetSVG += ',5.5,9,5.5 S12.5,7.067,12.5,9z';
    AmCharts.makeChart('world-map-visitors', {
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
        'unlistedAreasColor': '#4680ff',
        'outlineThickness': 0.1
      },

      'dataProvider': {
        'map': 'worldLow',
        'zoomLevel': 1,
        'zoomLongitude': 30,
        'zoomLatitude': 10,
        'images': [{
          'svgPath': targetSVG,
          'zoomLevel': 3,
          'scale': 1,
          'title': 'United State',
          'latitude': 50.6353,
          'longitude': 120.2250
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
