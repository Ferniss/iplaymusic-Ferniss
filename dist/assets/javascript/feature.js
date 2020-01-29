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
    req.playlists.items.forEach(function (element) {
      console.log(element.images);
      var templatefeature = document.querySelector('#template-feature');
      var placer = document.querySelector('.main_section');
      var clone = templatefeature.content.cloneNode(true);
      clone.querySelector('.section__img').src = element.images[0].url;
      clone.querySelector('.a-tag').href = "/albumsdetails.html?album=".concat(element.id);
      placer.appendChild(clone);
    });
  });
});