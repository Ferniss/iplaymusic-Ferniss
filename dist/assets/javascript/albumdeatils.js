"use strict";

var ClientID = "bfd3186986c944c1960a4d630977a810";
var ClientSecret = "dc145f038e95439daec2d3c566f946c6";
var key = btoa(ClientID + ":" + ClientSecret);
console.log(key);
fetch('https://accounts.spotify.com/api/token', {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic NzI2ZjE5OTNmYjAzNDg0NDhhM2U5OWNlODBlY2ExYTQ6MTFjNjY1NDkyYzQzNDM4Zjg5NmRkMjVmZmRiMzIyMmM="
  },
  body: "grant_type=client_credentials"
}).then(function (response) {
  return response.json();
}).then(function (data) {
  var accessToken = data.access_token;
  fetch('https://api.spotify.com/v1/browse/new-releases?country=SE', {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + accessToken
    }
  }).then(function (res) {
    return res.json();
  }).then(function (req) {
    console.log(req.albums);
    req.albums.forEach(function (element) {
      console.log(element.images);
      var albumdeatils = document.querySelector('#albumdeatils');
      var placer = document.querySelector('.section__wrapper-album');
      var clone = albumdeatils.content.cloneNode(true);
      clone.querySelector('.section__img-album').src = element.images[0].url; //    clone.querySelector('.section__div-h3-album').innerText = element.name
      //    clone.querySelector('.section__div-p-album').innerText = element.artists[0].name
      //    clone.querySelector('.section__div-p2-album').innerText = element.total_tracks

      placer.appendChild(clone);
    });
  });
});