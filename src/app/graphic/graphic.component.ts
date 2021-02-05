import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Options } from 'highcharts';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {

  @Input() valeur_x : number = 1;
  @Input() valeur_y : number = 5;
  
  donutChart : Chart | undefined;
  donutChartOptions : Options | undefined;
  
  constructor() {}

  ngOnInit(): void {
    this.donutChartOptions = {
      chart : {
          type: 'pie', 
          plotShadow: false, 
      }, 
      credits: {
          enabled: false
      },
      plotOptions: {
          pie: {
              innerSize: '99%',
              borderWidth: 40, 
              borderColor: '',  
              slicedOffset: 20,
              dataLabels: {
                  connectorWidth: 0
              }
          }
      }, 
      title: {
          verticalAlign: 'middle',
          floating: true, 
          text: 'Montri chart'
      },
      legend: {
          enabled: false, 
      }, 
      series: [
          {
              type: 'pie',
              data: [
                  {name:'x', y : parseInt(`${this.valeur_x}`), color: '#F47000'}, 
                  {name:'y', y : parseInt(`${this.valeur_y}`), color: '#FFC953'},
              ]
          }
      ]
  }
  
    this.donutChart = new Chart(this.donutChartOptions); 
    

  }

}
