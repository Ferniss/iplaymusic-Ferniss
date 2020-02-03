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
  fetch('https://api.spotify.com/v1/artists?ids=0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin,7dGJo4pcD2V6oG8kP0tJRR,0CEFCo8288kQU7mJi25s6E,2ZbyyCS8KLKsuoNlxc76Ev', {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + accessToken
    }
  }).then(function (res) {
    return res.json();
  }).then(function (req) {
    console.log(req.artists);
    req.artists.forEach(function (element) {
      console.log(element.images);
      var templatefeature = document.querySelector('#template-artist');
      var placer = document.querySelector('.artistimg__wrapper');
      var clone = templatefeature.content.cloneNode(true);
      clone.querySelector('.artistsection__img').src = element.images[0].url;
      placer.appendChild(clone);
    });
  });
  fetch('https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_tracks=0c6xIDDpzE81m2q797ordA&min_energy=0.4&min_popularity=50&market=US', {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + accessToken
    }
  }).then(function (res) {
    return res.json();
  }).then(function (req) {
    console.log(req.tracks[0]);
    req.tracks.forEach(function (element) {
      var templatealbums = document.querySelector('#template-artist2');
      var placer2 = document.querySelector('.artistimg__wrapper2');
      var clone = templatealbums.content.cloneNode(true);
      clone.querySelector('.artistimg__1').src = element.album.images[0].url;
      clone.querySelector(".artistfigcaption_text").innerText = element.album.name;
      placer2.appendChild(clone);
    });
  });
});