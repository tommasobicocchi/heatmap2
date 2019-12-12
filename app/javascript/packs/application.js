import "bootstrap";
import "chart.js";
import {barChart, lineChart, doughnutChart} from "../plugin/init_chart"



document.querySelectorAll('td').on('click', function() {
    var $currentTable = $(this).closest('display-table');
    var index = $(this).index();
    $currentTable.find('td').removeClass('red');
    $currentTable.find('tr').each(function() {
        $(this).find('td').eq(index).addClass('red');
    });
});


barChart();
lineChart();
doughnutChart();
