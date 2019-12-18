import Dropzone from "dropzone";
import Rails from "@rails/ujs";

 import { Controller } from "stimulus";

 export default class extends Controller {
   static targets = [ "input" ]

   connect() {
    console.log(this);
    Dropzone.autoDiscover = false;

    console.log(this.file)
    const options = {
      url: this.url,
      method: "post",
      addRemoveLinks: true,
      clickable: true,
      acceptedFiles: '.csv',
      params: {
        project_id: this.projectId
      },
      headers: {
        'X-CSRF-Token': Rails.csrfToken()
      },
      maxFilesize: 3,
      success: this.onSuccess
    };
    this.dropzone = new Dropzone(this.element, options)
  }

  onSuccess(file, res) {
    location.reload();
  }

  get url() {
    return this.data.get("url");
  }

  get projectId() {
    return this.data.get("projectId");
  }
}

// function() {
//     this.on("success", function(response) { location.reload(); });
//   }





