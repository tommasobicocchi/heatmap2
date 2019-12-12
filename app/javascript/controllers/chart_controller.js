import { Controller } from 'stimulus';
import { bar } from '../components/charts';
import { line } from '../components/charts';
import { doughnut } from '../components/charts';

export default class extends Controller {
  connect() {
    console.log(this.data.get("type"))
    if (this.data.get("type") === "line") {
      line(this.element, this.headers, this.values)
    } else if (this.data.get("type") === "bar") {
      bar(this.element, this.headers, this.values)
    } else {
      doughnut(this.element, this.headers, this.values)
    }
  }

  get type() {
    if (this.data.has("type")) {
      return this.data.get("type") // Gonna do switch on this value, no if else statement.
    } else {
      return "bar"
    }
  }

  get headers() {
    if (this.data.has("headers")) {
      return JSON.parse(this.data.get("headers"))
    } else {
      return null
    }
  }
  get values() {
    if (this.data.has("data")) {
      return JSON.parse(this.data.get("data"))
    } else {
      return null
    }
  }
}
