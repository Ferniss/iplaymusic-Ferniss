"use strict";

function toggleDarkLight() {
  var body = document.querySelector("html");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}