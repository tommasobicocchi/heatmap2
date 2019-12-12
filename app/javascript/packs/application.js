import "bootstrap";


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


//for (let i = 0; i < selectfile.length; i++) {
//  selectfile[i].addEventListener("click", (event) => {
//    selectfile[i].innerHTML = "";
//    console.log(selectfile[i]);
//  })
//};


