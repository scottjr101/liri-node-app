# liri-node-app

**Creator**: `Scott Ladd`

**Created on**: `Oct 30th 2019`

- - -

## ABOUT THE APP
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data. The user has the option of using four commands (listed below) in conjuntion with specific parameters associated with the commands. The  `Commands` are:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`

## What Each Command Should Do

1. Concert-this
   * Provide the Line-up of Artist preforming
   * Name of the venue
   * Venue location
   * Date of the Event (format this as "MM/DD/YYYY")

- - -

## HOW TO USE LIRI
### **Step by Step instructions**

1. Clone the repository
2. Navigate to the folder that contains the `liri.js` file.
3. Run npm install, and the following packages should be installed:
   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
   * [Axios](https://www.npmjs.com/package/axios)
   * [Moment](https://www.npmjs.com/package/moment)
   * [DotEnv](https://www.npmjs.com/package/dotenv)
4. Create a .env file in the same directory as the rest of the files. It should look similar to this:

```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

```
5. Run the commands.

    **Example 1a**: Run the `concert-this` command
    
        node liri.js concert-this "name of artist or band"
    
    See screen-shot below:

    ![Results](/screenshots/concert-correct-search.png)

    **Example 2**: Run the `spotify-this-song` command
    
        node liri.js spotify-this-song "name of song or artist/band"
    
    Output: The system will display a list of information associated with the song. It can result in multiple records. The system will also log all the results in the log.txt file. See screen-shot below:

    ![Results](/screenshots/spotify_this_results.PNG)

    **Example 3**: Run the `movie-this` command
    
        node liri.js movie-this <name of movie>
    
    Output: The system will display information associated with the movie. The system will also log all the results in the log.txt file. See screen-shot below:

    ![Results](/screenshots/movie_this_results.PNG)


    **Example 4**: Run the `do-what-it-says` command
        
        node liri.js do-what-it-says
        
    Output: The system will read the text in the random.txt file, and perform the comman listed in the random.txt file. 
    
    See screen-shot below:

    ![Results](/screenshots/dothis_this_results.PNG)

- - -

## TECHNOLOGIES USED
* Javascript
* Nodejs
* Node packages:
    * Node-Spotify-API
    * Request
    * Moment
    * DotEnv
* APIs used:
    * Bands in Town
    * OMDB
* Git
* GitHub