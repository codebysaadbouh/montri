import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Options } from 'highcharts';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {

  @Input() valeur_x : number | undefined;
  @Input() valeur_y : number | undefined;
  
  donutChart : any;
  donutChartOptions : any;
  
  dunot () {
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
 

  constructor() {}
  ngOnInit(): void {
    this.dunot(); 
  }   
  

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
}
