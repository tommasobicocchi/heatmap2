import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = [ "cell", "button"]

  connect() {
    this.columnIds = []
  }

  check(event) {
    //event.preventDefault()
    //event.target.attributes.href.nodeValue.slice(0, -1).concat(`${this.columnIds.join()}`);
    event.target.href.slice(0, -1).concat(`${this.columnIds.join()}`);
    console.log(event.target.getAttribute('href'));
    event.target.setAttribute('href',`${event.target.href.concat(`${this.columnIds.join()}`)}`)
  }

  toggle(event) {
    const id = event.target.dataset.columnId;
    this.removeOrAddId(id)
    if (this.columnIds.sort().includes("0")) {
    } else {
      this.columnIds.unshift("0");
      console.log(this.columnIds);
    }
    // this.cells find cells with id
  }

  removeOrAddId(id) {
    const index = this.columnIds.indexOf(id);
    if (index !== -1) {
      //this.cells.forEach(element => console.log(element.attributes.datacolumnid.nodeValue));
      //this.cells.forEach(element => console.log(element.attributes.datacolumnid.nodeValue.trim() == index.toString()));
      this.cells.forEach(element => (element.attributes.datacolumnid.nodeValue.trim()
      === this.columnIds[this.columnIds.length-1]) ? element.attributes.class.textContent = 'cell-border' : stop = true)
      this.columnIds.splice(index, 1);
    } else {
      //console.log(this.scope.element.classList.add('red'));
      this.columnIds.push(id)
      this.cells.forEach(element => (element.attributes.datacolumnid.textContent
        === this.columnIds[this.columnIds.length-1]) ? element.attributes.class.textContent = 'enlight' : stop = true)
    }
  }

  get links() {
    return this.linkTargets;
  }

  get cells() {
    return this.cellTargets;
  }
}
