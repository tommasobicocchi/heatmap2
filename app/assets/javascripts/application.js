//= require rails-ujs
//= require_tree .
//= require dropzone

$(function() {
  console.log("ciao");
  var myDropzone = new Dropzone("div#my-created-dropzone", { url: "/file/post"});
});
