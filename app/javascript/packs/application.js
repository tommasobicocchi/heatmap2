import "bootstrap";

// import {barChart, lineChart, doughnutChart} from "../plugin/init_chart"
import '../vendor/stimulus';




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

