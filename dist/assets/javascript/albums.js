"use strict";

alert("Reload siden");
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
  fetch('https://api.spotify.com/v1/albums/?ids=41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37', {
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
      var templatefeature = document.querySelector('#template-albums');
      var placer = document.querySelector('.img__wrapper');
      var clone = templatefeature.content.cloneNode(true);
      clone.querySelector('.section__img').src = element.images[0].url;
      placer.appendChild(clone);
    });
  });
  fetch('https://api.spotify.com/v1/browse/new-releases?country=SE', {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + accessToken
    }
  }).then(function (res) {
    return res.json();
  }).then(function (req) {
    console.log(req.albums.items[0]);
    req.albums.items.forEach(function (elementt) {
      console.log(elementt.id);
      var templatealbums = document.querySelector('#template-albums2');
      var placer2 = document.querySelector('.section__wrapper-album');
      var clone = templatealbums.content.cloneNode(true);
      clone.querySelector('.section__img-album').src = elementt.images[0].url;
      clone.querySelector('.a-tag').href = "/albumsdetails.html?album=".concat(elementt.id);
      clone.querySelector('.section__div-h3-album').innerText = elementt.name;
      clone.querySelector('.section__div-p-album').innerText = elementt.artists[0].name;
      clone.querySelector('.section__div-p2-album').innerText = elementt.total_tracks;
      placer2.appendChild(clone);
    });
  });
}); // .then(res=> res.json())
// .then(req=>{
//   console.log(req.artists) 
//   console.log(req.playlists.items[0].name) 
//       const mainalbums = document.querySelector('.mainalbums')
//       mainalbums.innerHTML = 
//       `<section class="main_section">
//       <h1 class="section__h1">All Artist</h1>
//       <div class="section__p-wrapper">
//       <p class="section__p">artist of the month</p> 
//       <p class="section__p2"> View all</p>
//   </div>
//   <figure class="img__wrapper">
//       <img class="section__img" src="/assets/images/feature1.png" alt="">
//       <img class="section__img" src="/assets/images/feature1.png" alt="">
//       <img class="section__img" src="/assets/images/feature1.png" alt="">
//       <h3 class="figure__h3">September</h3>
//       <h2 class="figure__h2">Jonas Brothers</h2>
//   </figure>
//   <div class="section__p-wrapper">
//       <p class="section__p">artist of the month</p> 
//       <p class="section__p2"> View all</p>
//   </div>
//   <article class="section__wrapper-album">
//       <section class="article__section-album">
//           <a href="/albumsdetails.html">
//               <img class="section__img-album" src="/assets/images/feature1.png" alt="">
//           </a>
//          <div class="section__div-album">
//               <h3 class="section__div-h3-album">bhh</h3>
//               <p class="section__div-p-album">jnf</p>
//          </div>
//           <p class="section__div-p2-album">12 songs</p>
//       </section>
//       <section class="article__section-album">
//           <img class="section__img-album" src="/assets/images/feature1.png" alt="">
//          <div class="section__div-album">
//               <h3 class="section__div-h3-album">bhh</h3>
//               <p class="section__div-p-album">jnf</p>
//          </div>
//           <p class="section__div-p2-album">12 songs</p>
//       </section>
//       <section class="article__section-album">
//           <img class="section__img-album" src="/assets/images/feature1.png" alt="">
//          <div class="section__div">
//               <h3 class="section__div-h3-album">bhh</h3>
//               <p class="section__div-p-album">jnf</p>
//          </div>
//           <p class="section__div-p2-album">12 songs</p>
//       </section>
//       <section class="article__section-album">
//           <img class="section__img-album" src="/assets/images/feature1.png" alt="">
//          <div class="section__div">
//               <h3 class="section__div-h3-album">bhh</h3>
//               <p class="section__div-p-album">jnf</p>
//          </div>
//           <p class="section__div-p2-album">12 songs</p>
//       </section>
//   </article>
//       `