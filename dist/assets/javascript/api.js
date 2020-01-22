"use strict";

var clientId = "bfd3186986c944c1960a4d630977a810";
var clientSecret = "dc145f038e95439daec2d3c566f946c6";
var key = btoa(clientId + ":" + clientSecret);
console.log(key);
fetch('https://accounts.spotify.com/api/token', {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": 'Basic YmZkMzE4Njk4NmM5NDRjMTk2MGE0ZDYzMDk3N2E4MTA6ZGMxNDVmMDM4ZTk1NDM5ZGFlYzJkM2M1NjZmOTQ2YzY='
  },
  body: "grant_type=client_credentials"
}).then();