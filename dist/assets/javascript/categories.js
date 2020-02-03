"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var category = document.querySelectorAll(".categories");
  var eksempel = document.querySelector("#eksempel");
  var inner = document.querySelector(".artickle-categories-hide");
  category.forEach(function (element) {
    element.addEventListener('click', function () {
      inner.innerHTML = "\n                 \n <article class=\"artickle-categories artickle-categories-hide\">\n                 <section class=\"categories-show\">\n        <p  class=\"categories-text\">Acoustic Blues</p>\n        <i class=\"fas fa-ellipsis-h categories-white\"></i>\n       </section>\n  \n       <section class=\"categories-show\">\n          <p  class=\"categories-text\">Blues Rock</p>\n          <i class=\"fas fa-ellipsis-h categories-white\"></i>\n         </section>\n  \n         <section class=\"categories-show\">\n          <p  class=\"categories-text\">Canadian blues</p>\n          <i class=\"fas fa-ellipsis-h categories-white\"></i>\n         </section>\n  \n         <section class=\"categories-show\">\n          <p  class=\"categories-text\">Jazz Blues</p>\n          <i class=\"fas fa-ellipsis-h categories-white\"></i>\n         </section>\n  \n         <section class=\"categories-show\">\n          <p  class=\"categories-text\">Piano Blues</p>\n          <i class=\"fas fa-ellipsis-h categories-white\"></i>\n         </section>\n  \n         <section class=\"categories-show\">\n          <p  class=\"categories-text\">Soul Blues</p>\n          <i class=\"fas fa-ellipsis-h categories-white\"></i>\n         </section>\n  \n         <section class=\"categories-show\">\n          <p  class=\"categories-text\">Swamp Blues</p>\n          <i class=\"fas fa-ellipsis-h categories-white\"></i>\n         </section>\n              \n </article>";
      eksempel.addEventListener("click", function () {
        inner.innerHTML = "";
      });
    });
  }); // eksempel.addEventListener("click", ()=>{
  //     inner.innerHTML = `<section class="categories-show">
  //     <p  class="categories-text">Acoustic Blues</p>
  //     <i class="fas fa-ellipsis-h categories-white"></i>
  //    </section>
  //    <section class="categories-show">
  //       <p  class="categories-text">Blues Rock</p>
  //       <i class="fas fa-ellipsis-h categories-white"></i>
  //      </section>
  //      <section class="categories-show">
  //       <p  class="categories-text">Canadian blues</p>
  //       <i class="fas fa-ellipsis-h categories-white"></i>
  //      </section>
  //      <section class="categories-show">
  //       <p  class="categories-text">Jazz Blues</p>
  //       <i class="fas fa-ellipsis-h categories-white"></i>
  //      </section>
  //      <section class="categories-show">
  //       <p  class="categories-text">Piano Blues</p>
  //       <i class="fas fa-ellipsis-h categories-white"></i>
  //      </section>
  //      <section class="categories-show">
  //       <p  class="categories-text">Soul Blues</p>
  //       <i class="fas fa-ellipsis-h categories-white"></i>
  //      </section>
  //      <section class="categories-show">
  //       <p  class="categories-text">Swamp Blues</p>
  //       <i class="fas fa-ellipsis-h categories-white"></i>
  //      </section>`
  //      eksempel.addEventListener("click", ()=>{
  //         inner.innerHTML = ``
  //     })
  // })
});