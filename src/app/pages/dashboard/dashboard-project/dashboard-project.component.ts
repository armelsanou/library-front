import { Component, OnInit } from '@angular/core';

import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/gauge.js';
import '../../../../assets/charts/amchart/pie.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/ammap.js';
import '../../../../assets/charts/amchart/worldLow.js';

declare var $: any;
declare var AmCharts: any;
import '../../../../../node_modules/peity/jquery.peity.min.js';

@Component({
  selector: 'app-dashboard-project',
  templateUrl: './dashboard-project.component.html',
  styleUrls: ['./dashboard-project.component.scss']
})
export class DashboardProjectComponent implements OnInit {
  designGraph1 = buildstackchartjs('#fff', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], 'transparent');
  designGraph2 = buildstackchartjs('#fff', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], 'transparent');
  designGraph3 = buildstackchartjs('#fff', [66, 60, 50, 55, 20, 55, 10, 35, 15, 25], 'transparent');
  designGraphOption = buildChartOption();

  clientMap1 = buildChartJS('rgb(70, 128, 254)', [5, 35, 45, 20, 10, 30, 15, 45, 15, 10], 'rgba(70, 128, 254,0.2)', 'transparent');
  clientMap2 = buildChartJS('rgb(147, 190, 82)', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], 'rgba(147, 190, 82,0.2)', 'transparent');
  clientMapOption = buildChartOption();

  constructor() { }

  ngOnInit() {
    $('#project-over-sub-1').peity('line', {
      fill: 'rgba(70, 128, 254,0.2)',
      stroke: 'rgb(70, 128, 254)',
      width: '100%',
      height: '50px'
    });

    $('#project-over-sub-2').peity('line', {
      fill: 'rgba(252, 97, 128,0.2)',
      stroke: 'rgb(252, 97, 128)',
      width: '100%',
      height: '50px'
    });

    $('#project-over-sub-3').peity('line', {
      fill: 'rgba(255, 182, 77,0.2)',
      stroke: 'rgb(255, 182, 77)',
      width: '100%',
      height: '50px'
    });

    AmCharts.makeChart('statestics-chart', {
      'type': 'serial',
      'marginTop': 0,

      'marginRight': 80,
      'dataProvider': [{
        'year': 'Jan',
        'value': 0.98
      }, {
        'year': 'Feb',
        'value': 1.87
      }, {
        'year': 'Mar',
        'value': 0.97
      }, {
        'year': 'Apr',
        'value': 1.64
      }, {
        'year': 'May',
        'value': 0.40
      }, {
        'year': 'Jun',
        'value': 2.90
      }, {
        'year': 'Jul',
        'value': 5.2
      }, {
        'year': 'Aug',
        'value': 0.77
      }, {
        'year': 'Sap',
        'value': 3.1
      }],
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
        'lineThickness': 2,
        'negativeLineColor': '#4680ff',
        'type': 'smoothedLine',
        'valueField': 'value'
      }],
      'chartCursor': {
        'cursorAlpha': 0,
        'valueLineEnabled': false,
        'valueLineBalloonEnabled': true,
        'valueLineAlpha': false,
        'color': '#fff',
        'cursorColor': '#FC6180',
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
    AmCharts.makeChart('invoice', {
      'type': 'pie',

      'theme': 'light',
      'dataProvider': [{
        'country': 'Lithuania',
        'color': '#93BE52',
        'value': 260
      }, {
        'country': 'Ireland',
        'color': '#4680ff',
        'value': 201
      }, {
        'country': 'Germany',
        'color': '#FC6180',
        'value': 65
      }, {
        'country': 'Australia',
        'color': '#FFB64D',
        'value': 39
      }],
      'valueField': 'value',
      'titleField': 'country',
      'labelsEnabled': false,
      'colorField': 'color',
      'innerRadius': '50%',
      'outlineAlpha': 0.9,
      'depth3D': 0,
      'balloonText': '[[title]]<br><span style="font-size:14px"><b>[[value]]</b> ([[percents]]%)</span>',
      'angle': 0,
    });
    AmCharts.makeChart('project-overview-chart', {
      'type': 'pie',

      'theme': 'light',
      'dataProvider': [{
        'country': 'Project Processed',
        'color': '#4680ff',
        'value': 201
      }, {
        'country': 'Project Returned',
        'color': '#FC6180',
        'value': 65
      }, {
        'country': 'Project Sold',
        'color': '#FFB64D',
        'value': 39
      }],
      'valueField': 'value',
      'titleField': 'country',
      'labelsEnabled': false,
      'autoMargins': false,
      'marginTop': 0,
      'marginBottom': 0,
      'marginLeft': 0,
      'marginRight': 0,
      'pullOutRadius': 0,
      'colorField': 'color',
      'outlineAlpha': 0.9,
      'depth3D': 0,
      'balloonText': '[[title]]',
      'angle': 0,
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

function buildstackchartjs(a, b, f) {
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
