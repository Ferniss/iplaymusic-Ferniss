"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var category = document.querySelector(".categories");
  var eksempel = document.querySelector("#eksempel");
  var inner = document.querySelector(".artickle-categories-hide");
  eksempel.addEventListener("click", function () {
    inner.innerHTML = "<section class=\"categories-show\">\n        <p  class=\"categories-text\">Acoustic Blues</p>\n        <i class=\"fas fa-ellipsis-h categories-white\"></i>\n       </section>\n  \n       <section class=\"categories-show\">\n          <p  class=\"categories-text\">Blues Rock</p>\n          <i class=\"fas fa-ellipsis-h categories-white\"></i>\n         </section>\n  \n         <section class=\"categories-show\">\n          <p  class=\"categories-text\">Canadian blues</p>\n          <i class=\"fas fa-ellipsis-h categories-white\"></i>\n         </section>\n  \n         <section class=\"categories-show\">\n          <p  class=\"categories-text\">Jazz Blues</p>\n          <i class=\"fas fa-ellipsis-h categories-white\"></i>\n         </section>\n  \n         <section class=\"categories-show\">\n          <p  class=\"categories-text\">Piano Blues</p>\n          <i class=\"fas fa-ellipsis-h categories-white\"></i>\n         </section>\n  \n         <section class=\"categories-show\">\n          <p  class=\"categories-text\">Soul Blues</p>\n          <i class=\"fas fa-ellipsis-h categories-white\"></i>\n         </section>\n  \n         <section class=\"categories-show\">\n          <p  class=\"categories-text\">Swamp Blues</p>\n          <i class=\"fas fa-ellipsis-h categories-white\"></i>\n         </section>";
    eksempel.addEventListener("click", function () {
      inner.innerHTML = "";
    });
  });
});