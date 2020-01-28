const ClientID = "bfd3186986c944c1960a4d630977a810";
const ClientSecret = "dc145f038e95439daec2d3c566f946c6";
const key = btoa(ClientID + ":" + ClientSecret)

fetch('https://accounts.spotify.com/api/token', {
    
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic NzI2ZjE5OTNmYjAzNDg0NDhhM2U5OWNlODBlY2ExYTQ6MTFjNjY1NDkyYzQzNDM4Zjg5NmRkMjVmZmRiMzIyMmM="
    },
    body: "grant_type=client_credentials"
})
.then(
    response=> response.json()
    )
    .then(data=>{
        let accessToken = data.access_token
        let album = new URLSearchParams(document.location.search).get("album");
        fetch(`https://api.spotify.com/v1/albums/${album}/tracks?`,{
            method: "GET",
            headers: {
                "Authorization" : "Bearer " + accessToken
            }
        })
        .then(res=> res.json())
        .then(req=>{
          console.log(req) 
          req.items.forEach(element => {
              
                const albumdeatils = document.querySelector('#albumdeatils');
                const placer = document.querySelector('.section__wrapper-album');
                const clone = albumdeatils.content.cloneNode(true)
                //clone.querySelector('.pølse').src = element.images[0].url
                clone.querySelector('.playlist_songname').innerText = element.name
                clone.querySelector('.playlist_artist').innerText = element.artists[0].name
                clone.querySelector('.playlist_timelength').innerText = millisToMinutesAndSeconds(element.duration_ms)
               
                placer.appendChild(clone)
                
            })
        });

    });
function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}