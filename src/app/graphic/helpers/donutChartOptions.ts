import { Options } from "highcharts";


export const donutChartOptions : Options = {
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
                {name:'x', y : 1, color: '#F47000'}, 
                {name:'y', y : 2, color: '#FFC953'},
            ]
        }
    ]
}