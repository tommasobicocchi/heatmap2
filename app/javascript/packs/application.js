import ScrollReveal from 'scrollreveal'
console.log("Hello");

const buttonTarget1chart = document.querySelector("#button1");
console.log(buttonTarget1chart);
const buttonTarget2chart = document.querySelector("#banana2");
const box = document.querySelectorAll("#box");

    const options = {
      delay: 500,
      //opacity: 1,
      duration: 1000,
      distance: '100%',
      origin: 'left'
    };



buttonTarget2chart.addEventListener("click", function(){
  box.forEach(x => x.classList.remove("col-12"));
  ScrollReveal().reveal(box, options);
  box.forEach(x => x.classList.add("col-6"));
});

buttonTarget1chart.addEventListener("click", function(){
  box.forEach(x => x.classList.remove("col-6"));
  ScrollReveal().reveal(box, options);
  box.forEach(x => x.classList.add("col-12"));
});





import "bootstrap";
import {barChart, lineChart, doughnutChart} from "../plugin/init_chart"
import '../vendor/stimulus';



