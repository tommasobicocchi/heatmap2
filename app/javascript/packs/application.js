import "bootstrap";
import "chart.js";
import {barChart, lineChart, doughnutChart} from "../plugin/init_chart"

const headers = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
const data = [12, 19, 3, 5, 2, 3]

barChart(headers, data);
lineChart();
doughnutChart();
