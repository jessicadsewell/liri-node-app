# LIRI Node App

In this assignment, we created a node application called LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

In the terminal, as you run the following commands, LIRI will complete the associated functions:

**concert-this** = This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

  * Name of the venue
  * Venue location
  * Date of the Event (use moment to format this as "MM/DD/YYYY")

![screenshot](/images/concertscreenshot)
Format: ![concert this screenshot](file:///Users/jessicasewell/Desktop/code/homework/liribot/liri-node-app/images/concertscreenshot.png)
 
**spotify-this-song** = This will search the Spotifi API for the song and display information that matches to the terminal:

  * Artist(s)
  * The song's name
  * A preview link of the song from Spotify
  * The album that the song is from
  
**movie-this** = This will search the IMBD API for the movie searched and output the following information to your terminal/bash window:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
   
**do-what-it-says** = Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

