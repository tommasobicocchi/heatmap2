import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = [ "cell" ]

  connect() {
    console.log(Math.random())
    this.columnIds = []
  }

  toggle(event) {
    const id = event.target.dataset.columnId;
    this.removeOrAddId(id)
    // this.cells find cells with id

  }

  removeOrAddId(id) {
    const index = this.columnIds.indexOf(id);
    if (index !== -1) {
      this.columnIds.splice(index, 1);
    } else {
      this.columnIds.push(id)
    }
  }

  get cells() {
    return this.cellTargets;
  }
}
