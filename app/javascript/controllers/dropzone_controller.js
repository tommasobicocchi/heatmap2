import Dropzone from "dropzone";
import Rails from "@rails/ujs";

 import { Controller } from "stimulus";

 export default class extends Controller {
   static targets = [ "input" ]

   connect() {
    Dropzone.autoDiscover = false;

    console.log("Hello from dropzone", this.projectId)
    const options = {
      url: this.url,
      method: "post",
      params: {
        project_id: this.projectId
      },
      headers: {
        'X-CSRF-Token': Rails.csrfToken()
      }
    }
    this.dropzone = new Dropzone(this.element, options)
  }

  get url() {
    return this.data.get("url");
  }

  get projectId() {
    return this.data.get("projectId");
  }
}







