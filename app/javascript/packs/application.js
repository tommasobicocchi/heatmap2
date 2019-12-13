import "bootstrap";
import {barChart, lineChart, doughnutChart} from "../plugin/init_chart"
import '../vendor/stimulus';

//const selectfile = document.querySelectorAll("td");
//console.log(selectfile);



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

 const firstCell = document.querySelectorAll("td")[0].className;
 const firstCellColumn = document.querySelectorAll(`.${firstCell}`);
 firstCellColumn.forEach(element => element.classList.add('blue'));
};

selectcellindex();





barChart(headers, data);
 lineChart(headers, data);
 doughnutChart(headers, data);

