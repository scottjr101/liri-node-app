require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

spotify
  .search({ type: 'track', query: 'All The Small Things' })
  .then(function(response) {
      console.log("OXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXO");
      console.log("Artist: " + response.tracks.items[0].artists[0].name);
      console.log("OXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXO");
    //console.log(JSON.stringify(response, null, 2));
  })
  .catch(function(err) {
    console.log(err);
  });