import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { donutChartOptions } from './helpers/donutChartOptions';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {
  donutChart = new Chart(donutChartOptions); 

  constructor() { }

  ngOnInit(): void {
  }

}
