const ClientID = "bfd3186986c944c1960a4d630977a810";
const ClientSecret = "dc145f038e95439daec2d3c566f946c6";
const key = btoa(ClientID + ":" + ClientSecret)
console.log(key);
fetch('https://accounts.spotify.com/api/token', {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic YmZkMzE4Njk4NmM5NDRjMTk2MGE0ZDYzMDk3N2E4MTA6ZGMxNDVmMDM4ZTk1NDM5ZGFlYzJkM2M1NjZmOTQ2YzY="
        },
        body: "grant_type=client_credentials"
    })
    .then(
        response=> response.json()
    )
    .then(data=>{
        let accessToken = data.access_token
        fetch('https://api.spotify.com/v1/artists',{
            method: "GET",
            headers: {
                "Authorization" : "Bearer " + accessToken
            }
        })
        .then(res=> res.json())
        .then(req=>{
          console.log(req.playlists.items) 
          console.log(req.playlists.items[0].name) 
          const featuredmain = document.querySelector('.featuredmain')
          
          featuredmain.innerHTML = `
          <section class="main_section">
          <h1 class="section__h1">Featured</h1>
      <figure class="img__wrapper">
      <img class="section__img" src="${req.playlists.items[0].images[0].url}" alt="">
          <h1 class="img__h1">${req.playlists.items[0].name}</h1>
          <h3 class="img__h3">Soundtrack</h3>
      </figure>

      <figure class="img__wrapper">
      <img class="section__img" src="${req.playlists.items[1].images[0].url}" alt="">
          <h1 class="img__h1">${req.playlists.items[1].name}</h1>
          <h3 class="img__h3">Soundtrack</h3>
      </figure>

      <figure class="img__wrapper">
      <img class="section__img" src="${req.playlists.items[2].images[0].url}" alt="">
          <h1 class="img__h1">${req.playlists.items[2].name}</h1>
          <h3 class="img__h3">Soundtrack</h3>
        </figure>

          <figure class="img__wrapper">
          <img class="section__img" src="${req.playlists.items[3].images[0].url}" alt="">
              <h1 class="img__h1">${req.playlists.items[3].name}</h1>
              <h3 class="img__h3">Soundtrack</h3>
          </figure>

          </figure>
          <figure class="img__wrapper">
          <img class="section__img" src="${req.playlists.items[4].images[0].url}" alt="">
              <h1 class="img__h1">${req.playlists.items[4].name}</h1>
              <h3 class="img__h3">Soundtrack</h3>
          </figure>

          </figure>
          <figure class="img__wrapper">
          <img class="section__img" src="${req.playlists.items[5].images[0].url}" alt="">
              <h1 class="img__h1">${req.playlists.items[5].name}</h1>
              <h3 class="img__h3">Soundtrack</h3>
          </figure>

          </figure>
          <figure class="img__wrapper">
          <img class="section__img" src="${req.playlists.items[6].images[0].url}" alt="">
              <h1 class="img__h1">${req.playlists.items[6].name}</h1>
              <h3 class="img__h3">Soundtrack</h3>
          </figure>

          </figure>
          <figure class="img__wrapper">
          <img class="section__img" src="${req.playlists.items[7].images[0].url}" alt="">
              <h1 class="img__h1">${req.playlists.items[7].name}</h1>
              <h3 class="img__h3">Soundtrack</h3>
          </figure>

          </figure>
          <figure class="img__wrapper">
          <img class="section__img" src="${req.playlists.items[8].images[0].url}" alt="">
              <h1 class="img__h1">${req.playlists.items[8].name}</h1>
              <h3 class="img__h3">Soundtrack</h3>
          </figure>

          </figure>
          <figure class="img__wrapper">
          <img class="section__img" src="${req.playlists.items[9].images[0].url}" alt="">
              <h1 class="img__h1">${req.playlists.items[9].name}</h1>
              <h3 class="img__h3">Soundtrack</h3>
          </figure>
    
          
      </section>
          `

               })
           });