console.log("hello");

<script type="text/javascript" src=".env"></script> 
require(".env").config();

var spotify = new Spotify(keys.spotify);
  var client = new Twitter(keys.twitter);


var express = require('express');
var Twitter = require('twitter');

var router = express.Router(); 
var client = new Twitter({
  consumer_key: '67qKWiVNAlJl18T4KsFJhee5s',
  consumer_secret: '7Q8Ja7VuWfqNfdANyaKQ3DjZSxjI2MMwXaPLSIJTghVHQaxKxF',
  access_token_key: '972967845670694912-rH9hiODTA2ilTtWY2nYiwRtn63Zcft8',
  access_token_secret: '0vzgJ1pCQIV1ExenXdka0phLzUQ02EYDdt5Rp8cmE4Mzq',
});

router.get('/', function(req, res, next) {
  // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
  client.get('statuses/user_timeline', { screen_name: 'astie086', count: 20 }, function(error, tweets, response) {
    if (!error) {
      res.status(200).render('index', { title: 'Express', tweets: tweets });
      console.log(tweets);
    }
    else {
      res.status(500).json({ error: error });
    }
  });
});

module.exports = router;