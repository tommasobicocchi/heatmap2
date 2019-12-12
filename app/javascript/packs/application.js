import "bootstrap";

// import {barChart, lineChart, doughnutChart} from "../plugin/init_chart"
import '../vendor/stimulus';


document.querySelectorAll('td').on('click', function() {
    var $currentTable = $(this).closest('display-table');
    var index = $(this).index();
    $currentTable.find('td').removeClass('red');
    $currentTable.find('tr').each(function() {
        $(this).find('td').eq(index).addClass('red');
    });
});

const selectcellindex = () => {
const selectfile = document.querySelectorAll("td");
console.log(selectfile);
 selectfile.forEach(element => element.addEventListener("click", (event) => {
    ennphatize(event.currentTarget.className);
    //ennphatize(selectfile[i].cellIndex);
  }));
};


const ennphatize = (x) => {
 const selectfile = document.querySelectorAll(`.${x}`);
 selectfile.forEach(element => element.classList.add('red'));
};

selectcellindex();





// barChart(headers, data);
// lineChart();
// doughnutChart();

