"use strict";

var ClientID = "bfd3186986c944c1960a4d630977a810";
var ClientSecret = "dc145f038e95439daec2d3c566f946c6";
var key = btoa(ClientID + ":" + ClientSecret);
console.log(key);
fetch('https://accounts.spotify.com/api/token', {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic YmZkMzE4Njk4NmM5NDRjMTk2MGE0ZDYzMDk3N2E4MTA6ZGMxNDVmMDM4ZTk1NDM5ZGFlYzJkM2M1NjZmOTQ2YzY="
  },
  body: "grant_type=client_credentials"
}).then(function (response) {
  return response.json();
}).then(function (data) {
  var accessToken = data.access_token;
  fetch('https://api.spotify.com/v1/browse/featured-playlists', {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + accessToken
    }
  }).then(function (res) {
    return res.json();
  }).then(function (req) {
    console.log(req.playlists.items);
    var featuredmain = document.querySelector('.featuredmain');
    featuredmain.innerHTML = "\n          <section class=\"main_section\">\n            <h1 class=\"section__h1\">Featured</h1>\n        <figure class=\"img__wrapper\">\n            <img class=\"section__img\" src=\"".concat(images[0], "\" alt=\"\">\n            <h1 class=\"img__h1\">The greatest snowman</h1>\n            <h3 class=\"img__h3\">Soundtrack</h3>\n        </figure>\n            \n        </section>\n        <figure class=\"feature-img__wrapper\">\n            <img class=\"section__img\" src=\"/assets/images/feature2.png\" alt=\"\">\n        </figure>\n          "); // req.playlists.forEach(element => {
    //     console.log(element)
    //     element.forEach(item=>{
    //         console.log(item)
  });
});