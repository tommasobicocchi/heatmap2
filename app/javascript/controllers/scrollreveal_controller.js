import ScrollReveal from 'scrollreveal'
import { Controller } from "stimulus";

export default class extends Controller {

  connect () {
    console.log("ciao")
    console.log()
    const target = this.element.id;
    const options = {
      delay: 500,
      //opacity: 1,
      duration: 1000,
      distance: '100%',
      origin: 'left'
    };
    ScrollReveal().reveal(this.element, options);
  }


}
