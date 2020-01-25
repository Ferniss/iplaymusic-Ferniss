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
  fetch('https://api.spotify.com/v1/artists?ids=0oSGxfWSnnOXhD2fKuz2Gy%2C3dBVyJ7JuOMt4GE9607Qin%2C7dGJo4pcD2V6oG8kP0tJRR', {
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
      var templatefeature = document.querySelector('#template-feature');
      var placer = document.querySelector('.img__wrapper');
      var clone = templatefeature.content.cloneNode(true);
      clone.querySelector('.section__img').src = element.images[0].url;
      placer.appendChild(clone);
    }); //     .then(res=> res.json())
    //     .then(req=>{
    //       console.log(req.artists) 
    //     //   console.log(req.playlists.items[0].name) 
    //       const artist = document.querySelector('.artist')
    //       artist.innerHTML = 
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
    //   </section>
    //   <section class="img__wrapper2">
    //       <figure>
    //           <img class="img__1" src="/assets/images/feature1.png" alt="">
    //           <figcaption>Aesop Rock</figcaption>
    //       </figure>
    //       <figure>
    //           <img class="img__1" src="/assets/images/feature1.png" alt="">
    //           <figcaption>ONE OK RO.</figcaption>
    //       </figure>
    //       <figure>
    //           <img class="img__1" src="/assets/images/feature1.png" alt="">
    //           <figcaption>PnB Rock</figcaption>
    //       </figure>
    //   </section>
    //   <section>
    //       <h1>Top Artist By Country</h1>
    //       <figure class="div__wrapper">
    //           <div class="green">
    //               <h2 class="green__div-h2">Top 50</h2>
    //               <br>
    //               <p class="div-p">us-uk</p>
    //           </div>
    //           <div class="blue">
    //               <h2 class="blue__div-h2">Top 50</h2>
    //               <p class="div-p">Global</p class="div-p">
    //           </div>
    //       </figure>
    //   </section>
    //       `
    //            })
    //        });
  });
});