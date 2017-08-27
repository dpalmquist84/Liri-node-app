const Spotify = require("node-spotify-api");
const Twitter = require("twitter");
const request = require("request");
const keys = require("./keys.js");
const fs = require("fs");


let searchParam = process.argv[2];
let varParam = process.argv[3];

if (searchParam === "my-tweets") {
	console.log(`tweets worked`);

	const twitter = new Twitter ({
	consumer_key: 'aZ6MT2d5N03VjVuPHxVC7aTfh',
	consumer_secret: 	'Hl4PvmwLrkXM2etNniis7ghxD8tg9dtf6yv6oUDKqLy6XR0fxK',
	access_token_key: 	'901438579817185280-lVmKmbFASoels1bYyeKOjg69G9mSWP0',
	access_token_secret: 'QpjDsLc4jkYczcwrjlEYv2nfhXSMcO21gF2ayWac26X2D'
	});

	twitter.get('search/tweets', {q: 'tweetPalmquist'}, function(error, tweets, response) {
   console.log(tweets);
   console.log(tweets.statuses.created_at)
});




   


	
} else if (searchParam === "spotify-this-song") {
	console.log(`spotify worked`);

	const spotify = new Spotify({
	id: 'ebc515e4fa854011a46e2ccbcf788058',
	secret: '5a4b4eaf98a84fbd8ebf6a1da92820d6'
	});

    let argsArr = process.argv;
    let varParam = process.argv.slice(3).join("+");
    debugger;

		spotify.search({ type: 'track', query: varParam }, function(err, data) {
		  if (err) {
		    return console.log('Error occurred: ' + err);
		  }
		 
		console.log(data);
		debugger;
		var results = data.tracks.items[0];
		console.log(`Artist: ${results.artists[0].name}`);
		console.log(`Song: ${results.name}`);
		console.log(`Link to the song ${results.preview_url}`);
		console.log(`Album: ${results.album.name}`);



});


} else if (searchParam === "movie-this") {
	console.log(`ombd worked`);
    let argsArr = process.argv;
    let varParam = process.argv.slice(3).join("+");

    if (varParam){

	  request("http://www.omdbapi.com/?t=" + varParam + "&y=&plot=short&apikey=40e9cece", function (error, response, body) {
	  console.log('error:', error); // Print the error if one occurred 
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
	  console.log('body:', body); 
	  console.log('response', response.body.Title)
	  console.log(body.Title);
	  console.log(body.Year);
	  console.log(body.Ratings[0].value);
	  console.log(body.Ratings[1].value);
	  console.log(body.Country);
	  console.log(body.Language);
	  console.log(body.Plot);
	  console.log(body.Actors);
	
});
	}
	else {
	  let varParam2 = "gremlins";
	  request("http://www.omdbapi.com/?t=" + varParam2 + "&y=&plot=short&apikey=40e9cece", function (error, response, body) {
	  console.log('error:', error); // Print the error if one occurred 
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
	  console.log('body:', body); 
	  console.log(body.Title);
	  console.log(body.Year);
	  console.log(body.Ratings[0].value);
	  console.log(body.Ratings[1].value);
	  console.log(body.Country);
	  console.log(body.Language);
	  console.log(body.Plot);
	  console.log(body.Actors);
	  console.log(`if you haven't watched "Gremlins" then you should http:www.imdb.com/title/tt0485947/
	  				it is currenlty on nextflix`)
	});
}



}  else if (searchParam === "do-what-this-says") {
	console.log(`random worked`);
	fs.readFile("random.txt", "utf8", function(error, data){
		if (error) {
			return console.log(error);
		}
	})
	console.log(data);





} else {
	console.log(`invalid request ${searchParam}`)
}
