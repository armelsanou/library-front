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
  selector: 'app-widget-chart',
  templateUrl: './widget-chart.component.html',
  styleUrls: ['./widget-chart.component.scss']
})
export class WidgetChartComponent implements OnInit {
  gTargetHTML: string;
  gGap: string;

  constructor() { }

  ngOnInit() {
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

    const chartData = [
      {
        'date': '2012-01-01',
        'distance': 327,
        'townName': 'New York',
        'townName2': 'New York',
        'townSize': 25,
        'latitude': 40.71,
        'duration': 408
      }, {
        'date': '2012-01-02',
        'distance': 371,
        'townName': 'Washington',
        'townSize': 14,
        'latitude': 38.89,
        'duration': 582
      }, {
        'date': '2012-01-03',
        'distance': 433,
        'townName': 'Wilmington',
        'townSize': 6,
        'latitude': 34.22,
        'duration': 282
      }, {
        'date': '2012-01-04',
        'distance': 345,
        'townName': 'Jacksonville',
        'townSize': 7,
        'latitude': 30.35,
        'duration': 379
      }, {
        'date': '2012-01-05',
        'distance': 480,
        'townName': 'Miami',
        'townName2': 'Miami',
        'townSize': 10,
        'latitude': 25.83,
        'duration': 501
      }, {
        'date': '2012-01-06',
        'distance': 386,
        'townName': 'Tallahassee',
        'townSize': 7,
        'latitude': 30.46,
        'duration': 343
      }, {
        'date': '2012-01-07',
        'distance': 348,
        'townName': 'New Orleans',
        'townSize': 10,
        'latitude': 29.94,
        'duration': 405
      }, {
        'date': '2012-01-08',
        'distance': 298,
        'townName': 'Houston',
        'townName2': 'Houston',
        'townSize': 16,
        'latitude': 29.76,
        'duration': 309
      }, {
        'date': '2012-01-09',
        'distance': 318,
        'townName': 'Dalas',
        'townSize': 17,
        'latitude': 32.8,
        'duration': 287
      }, {
        'date': '2012-01-10',
        'distance': 349,
        'townName': 'Oklahoma City',
        'townSize': 11,
        'latitude': 35.49,
        'duration': 485
      }, {
        'date': '2012-01-11',
        'distance': 603,
        'townName': 'Kansas City',
        'townSize': 10,
        'latitude': 39.1,
        'duration': 390
      }, {
        'date': '2012-01-12',
        'distance': 534,
        'townName': 'Denver',
        'townName2': 'Denver',
        'townSize': 18,
        'latitude': 39.74,
        'duration': 450
      }, {
        'date': '2012-01-13',
        'townName': 'Salt Lake City',
        'townSize': 12,
        'distance': 425,
        'duration': 270,
        'latitude': 40.75,
        'alpha': 0.4
      }, {
        'date': '2012-01-14',
        'latitude': 36.1,
        'duration': 460,
        'townName': 'Las Vegas',
        'townName2': 'Las Vegas',
        'bulletClass': 'lastBullet'
      }];
    AmCharts.makeChart('monthly-graph', {
      'type': 'serial',
      'theme': 'light',

      'dataDateFormat': 'YYYY-MM-DD',
      'dataProvider': chartData,
      'addClassNames': true,
      'startDuration': 1,
      'marginLeft': 0,

      'categoryField': 'date',
      'categoryAxis': {
        'parseDates': true,
        'minPeriod': 'DD',
        'autoGridCount': false,
        'gridCount': 50,
        'gridAlpha': 0.1,
        'gridColor': '#FFFFFF',
        'axisColor': '#555555',
        'dateFormats': [{
          'period': 'DD',
          'format': 'DD'
        }, {
          'period': 'WW',
          'format': 'MMM DD'
        }, {
          'period': 'MM',
          'format': 'MMM'
        }, {
          'period': 'YYYY',
          'format': 'YYYY'
        }]
      },

      'valueAxes': [{
        'id': 'a1',
        'title': 'distance',
        'gridAlpha': 0,
        'axisAlpha': 0
      }, {
        'id': 'a2',
        'position': 'right',
        'gridAlpha': 0,
        'axisAlpha': 0,
        'labelsEnabled': false
      }, {
        'id': 'a3',
        'title': '',
        'position': 'left',
        'gridAlpha': 0,
        'axisAlpha': 0,
        'lineAlpha': 0,
        'fontSize': 0,
        'inside': true,
      }],
      'graphs': [{
        'id': 'g1',
        'valueField': 'distance',
        'title': 'distance',
        'type': 'column',
        'fillAlphas': 0.9,
        'cornerRadiusTop': 5,
        // 'columnWidth': 0.3,
        'valueAxis': 'a1',
        'balloonText': '[[value]] miles',
        'legendValueText': '[[value]] mi',
        'legendPeriodValueText': 'total: [[value.sum]] mi',
        'lineColor': '#4680ff',
        'alphaField': 'alpha'
      }, {
        'id': 'g2',
        'valueField': 'latitude',
        'classNameField': 'bulletClass',
        'title': 'latitude/city',
        'type': 'line',
        // 'type': 'smoothedLine',
        'valueAxis': 'a2',
        'lineColor': '#303549',
        'lineThickness': 2,
        'dashLength': 8,
        'legendValueText': '[[value]]/[[description]]',
        'descriptionField': 'townName',
        'bullet': 'round',
        'bulletSizeField': 'townSize',
        'bulletBorderColor': '#4680ff',
        'bulletBorderAlpha': 1,
        'bulletBorderThickness': 2,
        'bulletColor': '#B5CDFF',
        'labelText': '[[townName2]]',
        'labelPosition': 'right',
        'balloonText': 'latitude:[[value]]',
        'showBalloon': true,
        'animationPlayed': true,
      }, {
        'id': 'g3',
        'title': 'duration',
        'valueField': 'duration',
        'type': 'smoothedLine',
        'valueAxis': 'a3',
        'lineColor': '#FC6180',
        'balloonText': '[[value]]',
        'lineThickness': 2,
        'legendValueText': '[[value]]',
        'bullet': 'round',
        'bulletBorderColor': '#FC6180',
        'bulletBorderThickness': 1,
        'bulletBorderAlpha': 1,
        'dashLengthField': 'dashLength',
        'animationPlayed': true
      }]
    });

    $('.dial').knob({
      draw: function() {
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

    AmCharts.makeChart('solid-gauge', {
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
          'color': '#f4f4f4',
          'startValue': 0,
          'endValue': 100,
          'radius': '100%',
          'innerRadius': '97%'
        }, {
          'color': '#4680FE',
          'startValue': 0,
          'endValue': 60,
          'radius': '100%',
          'innerRadius': '97%'
        }, {
          'color': '#f4f4f4',
          'startValue': 0,
          'endValue': 100,
          'radius': '70%',
          'innerRadius': '67%'
        }, {
          'color': '#FC6180',
          'startValue': 0,
          'endValue': 50,
          'radius': '70%',
          'innerRadius': '67%'
        }, {
          'color': '#f4f4f4',
          'startValue': 0,
          'endValue': 100,
          'radius': '40%',
          'innerRadius': '37%'
        }, {
          'color': '#FFB64D',
          'startValue': 0,
          'endValue': 25,
          'radius': '40%',
          'innerRadius': '37%'
        }]
      }],
      'export': {
        'enabled': true
      }
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
          'color': '#f4f4f4',
          'startValue': 0,
          'endValue': 100,
          'radius': '100%',
          'innerRadius': '97%'
        }, {
          'color': '#4680FE',
          'startValue': 0,
          'endValue': 60,
          'radius': '100%',
          'innerRadius': '97%'
        }, {
          'color': '#f4f4f4',
          'startValue': 0,
          'endValue': 100,
          'radius': '70%',
          'innerRadius': '67%'
        }, {
          'color': '#FC6180',
          'startValue': 0,
          'endValue': 50,
          'radius': '70%',
          'innerRadius': '67%'
        }]
      }],
      'export': {
        'enabled': true
      }
    });
    const gap_target = AmCharts.makeChart('gap-target', {
      'theme': 'light',

      'type': 'gauge',
      'axes': [{
        'topTextFontSize': 1,
        'topTextYOffset': 0,
        'topTextColor': '#fff',
        'axisColor': '#31d6ea',
        'axisThickness': 0,
        'endValue': 100,
        'gridInside': false,
        'inside': true,
        'radius': '50%',
        'fontSize': 0,
        'valueInterval': 100,
        'tickAlpha': 0,
        'startAngle': -90,
        'endAngle': 90,
        'unit': '%',
        'bandOutlineAlpha': 0,
        'bands': [{
          'color': '#FC6180',
          'endValue': 100,
          'innerRadius': '105%',
          'radius': '170%',
          'gradientRatio': [0],
          'startValue': 0
        }, {
          'color': '#4680FE',
          'endValue': 0,
          'innerRadius': '105%',
          'radius': '170%',
          'gradientRatio': [0],
          'startValue': 0
        }]
      }],
      'arrows': [{
        'alpha': 1,
        'innerRadius': '0%',
        'startWidth': 5,
        'nailRadius': 0,
        'radius': '170%'
      }]
    });
    setInterval(() => {
      const value = Math.round(Math.random() * 100);
      gap_target.arrows[0].setValue(value);
      gap_target.axes[0].setTopText(value + ' %');
      this.gTargetHTML = (value).toString();
      this.gGap = (100 - value).toString();
      gap_target.axes[0].bands[1].setEndValue(value);
    }, 2000);


    let targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17';
    targetSVG += ',2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5';
    targetSVG += ',9,5.5 S12.5,7.067,12.5,9z';
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
      'linesAboveImages': true,


    });

    const chart_sale = AmCharts.makeChart('sale-prediction', {
      'theme': 'light',

      'type': 'gauge',
      'axes': [{
        'id': 'axis2',
        'labelsEnabled': false,
        'axisColor': '#fec5d0',
        'axisThickness': 60,
        'axisAlpha': 1,
        'tickAlpha': 0,
        'radius': '10%',
        'startAngle': -150,
        'endAngle': 360,
        'topTextFontSize': 15,
        'topTextColor': '#000',
        'topTextYOffset': 80,
        'topText': ''
      }, {
        'topTextFontSize': 1,
        'topTextYOffset': 0,
        'axisColor': '#31d6ea',
        'axisThickness': 0,
        'endValue': 100,
        'gridInside': false,
        'inside': true,
        'radius': '50%',
        'fontSize': 0,
        'valueInterval': 100,
        'tickAlpha': 0,
        'startAngle': -150,
        'endAngle': 150,
        'unit': '%',
        'bandOutlineAlpha': 0,
        'bands': [{
          'color': '#fec5d0',
          'endValue': 100,
          'innerRadius': '150%',
          'radius': '170%',
          'gradientRatio': [0],
          'startValue': 0
        }, {
          'color': '#FC6180',
          'endValue': 0,
          'innerRadius': '150%',
          'radius': '170%',
          'gradientRatio': [0],
          'startValue': 0
        }]
      }],
      'arrows': [{
        'alpha': 1,
        'color': '#FC6180',
        'innerRadius': '250%',
        'nailRadius': 30,
        'nailAlpha': 1,
        'startWidth': 20,
        'radius': '500%'
      }]
    });
    setInterval(() => {
      const value = Math.round(Math.random() * 100);
      chart_sale.arrows[0].setValue(value * 1.18);
      chart_sale.axes[0].setTopText((value + '%').toString());
      chart_sale.axes[1].bands[1].setEndValue(value);
    }, 900);

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

    $('#monthlyprofit-1').peity('line', {
      fill: 'rgba(70, 128, 254,0.2)',
      stroke: 'rgb(70, 128, 254)'
    });

    $('#monthlyprofit-2').peity('line', {
      fill: 'rgba(252, 97, 128,0.2)',
      stroke: 'rgb(252, 97, 128)'
    });

    $('#monthlyprofit-3').peity('line', {
      fill: 'rgba(255, 182, 77,0.2)',
      stroke: 'rgb(255, 182, 77)'
    });

    $('#revenue-status-d-graph').peity('bar', {
      fill: ['#4680ff'],
      padding: 0.2,
    });

    $('#revenue-status-w-graph').peity('bar', {
      fill: ['#FC6180'],
      padding: 0.2,
    });

    $('#new-user-daily').peity('bar', {
      fill: ['#93BE52', '#93BE52', '#93BE52', '#93BE52', '#93BE52', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC'],
      padding: 0.2,
    });

    $('#page-views-today').peity('bar', {
      fill: ['#FFB64D', '#FFB64D', '#FFB64D', '#FFB64D', '#FFB64D', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC'],
      padding: 0.2,
    });

    $('#stacked-transactions-graph').peity('bar', {
      fill: ['#4680FE', '#FC6180', '#4680FE', '#FC6180', '#FC6180'],
      padding: 0.3,
    });

    $('span.order-graph').peity('pie', {
      fill: ['#ccc', '#FC6180'],
      width: 100,
      height: 100
    });

    $('#revenue-generate-graph').peity('bar', {
      fill: ['#FFB64D'],
      padding: 0.3,
      width: 100,
      height: 100
    });

    $('#tax-deduction-graph').peity('bar', {
      fill: ['#4680ff'],
      padding: 0.3,
      width: 100,
      height: 100
    });

    $('#monthly-earning').peity('line', {
      fill: '#999',
      stroke: '#999'
    });

    $('#revenue-report').peity('bar', {
      fill: ['#93BE52', '#4680ff'],
      padding: 0.2,
      width: '100%',
      height: '150px'
    });

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
  }

}
