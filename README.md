# LIRI Node App

In this assignment, we created a node application called LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

In the terminal, as you run the following commands, LIRI will complete the associated functions:

**concert-this** = This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

  * Name of the venue
  * Venue location
  * Date of the Event (use moment to format this as "MM/DD/YYYY")

![Concert Screenshot](/images/concertscreenshot.png)
 
**spotify-this-song** = This will search the Spotifi API for the song and display information that matches to the terminal:

  * Artist(s)
  * The song's name
  * A preview link of the song from Spotify
  * The album that the song is from

![Spotify Screenshot](/images/spotifythis.png)
  
  If no song is chosen, but the command is spotify-this-song, "The Sign" by Ace of Base will search as default.
  
![Spotify Screenshot Default](/images/spotifythisdefault.png)
  
**movie-this** = This will search the IMBD API for the movie searched and output the following information to your terminal/bash window:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
 
 ![Movie Screenshot](/images/moviethis.png)
   
   If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
 
 ![Movie Screenshot Default](/images/moviethisdefault.png)
   
**do-what-it-says** = Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

![Do what it says Screenshot](/images/doit.png)

**default** = If nothing is chosen and node is ran by itself, the terminal/bash window will display a default reading.

![Default](/images/default.png)

