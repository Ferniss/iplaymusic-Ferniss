"use strict";

var ClientID = "bfd3186986c944c1960a4d630977a810";
var ClientSecret = "dc145f038e95439daec2d3c566f946c6";
var key = btoa(ClientID + ":" + ClientSecret);
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
  document.querySelector('main').removeChild(document.querySelector('.spinner'));
  var accessToken = data.access_token;
  var album = new URLSearchParams(document.location.search).get("album");
  fetch("https://api.spotify.com/v1/albums/".concat(album, "/tracks?"), {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + accessToken
    }
  }).then(function (res) {
    return res.json();
  }).then(function (req) {
    console.log(req);
    req.items.forEach(function (element) {
      var albumdeatils = document.querySelector('#albumdeatils');
      var placer = document.querySelector('.section__wrapper-albumdetails');
      var clone = albumdeatils.content.cloneNode(true); //clone.querySelector('.pølse').src = element.images[0].url

      clone.querySelector('.albumdetails_songname').innerText = element.name;
      clone.querySelector('.albumdetails_artist').innerText = element.artists[0].name;
      clone.querySelector('.albumdetails_timelength').innerText = millisToMinutesAndSeconds(element.duration_ms);
      placer.appendChild(clone);
    });
  });
});

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = (millis % 60000 / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}