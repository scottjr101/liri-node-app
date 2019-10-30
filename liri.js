require("dotenv").config();

var moment = require('moment');
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require('axios');
var fs = require('fs');

var command = process.argv[2];
var search = process.argv[3];

followingCommands(command, search);

function followingCommands(command, search) {
    switch (command) {
        case "spotify-this-song":
            showSpotify(search);
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
};

function concertThis(search) {
    if (!search) {
        noValueconcertThis();
    } else {
        axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp")
            .then(function (response) {
                for (var i = 0; i < 3; i++) {
                    var dateTime = moment(response.data[i].datetime); //Saves datetime response into a variable
                    console.log("!-!-!-!-!-!-!-!-!-!-!-!-Concert!-!-!-!-!-!-!-!-!-!-!-!-!");
                    console.log("Line Up: " + response.data[i].lineup);
                    console.log("Venue Name: " + response.data[i].venue.name);
                    console.log("Venue Location: " + response.data[i].venue.city);
                    console.log("Date of the Event: " + dateTime.format("MMMM Do YYYY"));
                    console.log("!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!");
                }
                // to view all the data that response pulls back
                // console.log(response, null, 2);
                // console.log(response.data, null, 2);
                // }
            })
            .catch(function () {
                console.log("An error has occurred");
                console.log("Try a different artist/band name!");
                console.log("!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!");
            });
    }
};

function noValueconcertThis() {
    console.log("!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!");
    console.log("An error has occurred");
    console.log("Please provide an artist/band name");
    console.log("!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!");
};

function showSpotify(search) {
    if (!search) {
        search = "The Sign Ace"; // so when you dont put anything after "spotify-this-song" it will defalut to "The Sign" by "Ace of Bass"
    }

    spotify
        .search({
            type: 'track',
            query: search
        })
        .then(function (response) {
            console.log("!-!-!-!-!-!-!-!-!-!-!-Spotify!-!-!-!-!-!-!-!-!-!-!-!-!-!");
            console.log("Artist: " + response.tracks.items[0].artists[0].name);
            console.log("Song Name: " + response.tracks.items[0].name);
            console.log("Preview Link: " + response.tracks.items[0].external_urls.spotify);
            console.log("Album Name: " + response.tracks.items[0].album.name);
            console.log("!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!");
            // To see what data comes back in a viewable format I had to put
            //response inside (JSON.stringify) and (null, 2)
            //console.log(JSON.stringify(response, null, 2));
        })
        .catch(function (err) {
            console.log("An error has occurred");
            console.log("Try a different song title!");
            console.log("!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!");
        });

};

function movieThis(search) {
    if(!search) {
        search = "mr nobody";
    }
    axios.get("https://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy")
    .then(function(response) { 
        console.log("!-!-!-!-!-!-!-!-!-!-!-!-Movie!-!-!-!-!-!-!-!-!-!-!-!-!");
        console.log("Movie Title: " + response.data.Title); 
        console.log("Year of Release: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Country Produced: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors/Actresses: " + response.data.Actors);
        console.log("!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!");
    })
    .catch(function (err) {
        console.log("An error has occurred");
        console.log("Try a different movie title!");
        console.log("!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!-!");
    });
    
};

function doThis() {

    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArray = data.split(",");
        followingCommands(dataArray[0], dataArray[1]);
    });
};