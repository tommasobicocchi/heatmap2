import "bootstrap";
import "chart.js";



const loadCsv = () => {

console.log('DOM completamente caricato e analizzato');

}



document.addEventListener('DOMContentLoaded', (event) => {
     loadCsv();
});


import {barChart, lineChart, doughnutChart} from "../plugin/init_chart"

barChart();
lineChart();
doughnutChart();
