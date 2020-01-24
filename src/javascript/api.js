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
        fetch('https://api.spotify.com/v1/browse/featured-playlists',{
            method: "GET",
            headers: {
                "Authorization" : "Bearer " + accessToken
            }
        })
        .then(res=> res.json())
        .then(req=>{
          console.log(req.playlists.items) 
          const featuredmain = document.querySelector('.featuredmain')
          
          featuredmain.innerHTML = `
          <section class="main_section">
            <h1 class="section__h1">Featured</h1>
        <figure class="img__wrapper">
            <img class="section__img" src="${images[0]}" alt="">
            <h1 class="img__h1">The greatest snowman</h1>
            <h3 class="img__h3">Soundtrack</h3>
        </figure>
            
        </section>
        <figure class="feature-img__wrapper">
            <img class="section__img" src="/assets/images/feature2.png" alt="">
        </figure>
          `
          // req.playlists.forEach(element => {
          //     console.log(element)
          //     element.forEach(item=>{
          //         console.log(item)
               })
           });
    
        
  