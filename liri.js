require("dotenv").config();

var moment = require('moment');
moment().format();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var axios = require('axios');

var fs = require('fs');

var command = process.argv[2];
var search = process.argv[3];

switch (command) {
    case "spotify-this-song":
        Spotifys(search);
        break;
    case "concert-this":
        concertThis(search);
        break;
    case "movie-this":
        movieThis(search);
        break;
    case "do-what-it-says":
        doThis(search);
        break;
};


function Spotifys() {
if (!search){
    search = "The Sign";
}

spotify
  .search({ type: 'track', query: search })
  .then(function(response) {
      console.log("!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!");
      console.log("Artist: " + response.tracks.items[0].artists[0].name);
      console.log("Song Name: " + response.tracks.items[0].name);
      console.log("Preview Link: " + response.tracks.items[0].external_urls.spotify);
      console.log("Album Name: " + response.tracks.items[0].album.name);
      console.log("!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!");
      // To see what data comes back in a viewable format I had to put
      //response inside (JSON.stringify) and (null, 2)
    //console.log(JSON.stringify(response, null, 2));
  })
  .catch(function(err) {
    console.log("An error has occurred");
    console.log("Try a different song title!");
    console.log("!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!");
  });

};

function doThis() {

    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(",");
        Spotifys(dataArr[0], dataArr[1]);
    });
};