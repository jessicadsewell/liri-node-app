require("dotenv").config();
// add code to read and set any environment variables with the dotenv package

//grabbing data from keys.js
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

//stored arguments array
var command = process.argv[2];
var secondCommand = process.argv.slice(3).join("+");

//Concert
function concerts(concert) {
    var queryURL = "https://rest.bandsintown.com/artists/" + concert + "/events?app_id=codingbootcamp";
    console.log(concert);
    axios.get(queryURL).then(
        function (response) {
            console.log(response.data);
        })

}

//Spotify
function spotifythis(song) {

    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        for (var i = 0; i < data.tracks.items.length; i++) {
            var songData = data.tracks.items[i];
            //artist
            console.log("Artist: " + songData.artists[0].name);
            //song name
            console.log("Song: " + songData.name);
            //spotify preview link
            console.log("Preview URL: " + songData.preview_url);
            //album name
            console.log("Album: " + songData.album.name);
            console.log("-----------------------");

            //adds text to random.txt
            // fs.appendFile('log.txt', songData.artists[0].name);
            // fs.appendFile('log.txt', songData.name);
            // fs.appendFile('log.txt', songData.preview_url);
            // fs.appendFile('log.txt', songData.album.name);
            // fs.appendFile('log.txt', "-----------------------");
        }
    });
}

//Movie 
function movies(movie) {
    // Then run a request with axios to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function (response) {
            console.log("Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMdB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Actors: " + response.data.Actors);
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });

}


function doIt() {
    fs.readFile('random.txt', "utf8", function (error, data) {
        var txt = data.split(',');

        spotifythis(txt[1]);
    });
}


switch (command) {
    case "concert-this":
        concerts(secondCommand);
        break;

    case "spotify-this-song":
        if (secondCommand) {
            spotifythis(secondCommand);
        } else {
            spotifythis("The Sign");
        }
        break;

    case "movie-this":
        if (secondCommand) {
            movies(secondCommand)
        } else {
            movies("Mr. Nobody")
        }
        break;

    case "do-what-it-says":
        doIt();
        break;

    default:
        console.log("{Please enter a command: concert-this, spotify-this-song, movie-this, do-what-it-says}");
        break;
}