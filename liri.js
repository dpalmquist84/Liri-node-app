const Spotify = require("node-spotify-api");
const Twitter = require("twitter");
const request = require("request");
const keys = require("./keys.js");
const fs = require("fs");


let searchParam = process.argv[2];
let varParam = process.argv[3];

if (searchParam === "my-tweets") {
	
	

	const twitter = new Twitter ({
	consumer_key: 'aZ6MT2d5N03VjVuPHxVC7aTfh',
	consumer_secret: 	'Hl4PvmwLrkXM2etNniis7ghxD8tg9dtf6yv6oUDKqLy6XR0fxK',
	access_token_key: 	'901438579817185280-lVmKmbFASoels1bYyeKOjg69G9mSWP0',
	access_token_secret: 'QpjDsLc4jkYczcwrjlEYv2nfhXSMcO21gF2ayWac26X2D'

	});

	twitter.get('search/tweets', {q: 'tweetPalmquist'}, function(error, tweets, response) {

   for(i = 0; i < 15; i++) {
  
   console.log(`Tweet # ${i} Tweet: ${tweets.statuses[i].text} Time" ${tweets.statuses[i].created_at}`);
   debugger;
  
  
}
});




   


	
} else if (searchParam === "spotify-this-song") {


	const spotify = new Spotify({
	id: 'ebc515e4fa854011a46e2ccbcf788058',
	secret: '5a4b4eaf98a84fbd8ebf6a1da92820d6'
	});

    let argsArr = process.argv;
    let varParam = process.argv.slice(3).join("+");
    

		spotify.search({ type: 'track', query: varParam }, function(err, data) {
		  if (err) {
		    return console.log('Error occurred: ' + err);
		  }
		 
		var results = data.tracks.items[0];
		console.log(`Artist: ${results.artists[0].name}`);
		console.log(`Song: ${results.name}`);
		console.log(`Link to the song ${results.preview_url}`);
		console.log(`Album: ${results.album.name}`);




});


} else if (searchParam === "movie-this") {

    let argsArr = process.argv;
    let varParam = process.argv.slice(3).join("+");

    if (varParam){
      
	  request(("http://www.omdbapi.com/?t=" + varParam + "&y=&plot=short&apikey=40e9cece"), function (error, response, body) {
	  console.log('error:', error); // Print the error if one occurred 
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	  
	  let bodySplit = body.split(",") 
	
	  console.log(bodySplit[0]);//title
	  console.log(bodySplit[1]);//year
	  // console.log(bodySplit[]);//IMDB
	  // console.log(bodySplit[]);//RT
	  // console.log(bodySplit[]);//Country
	  // console.log(bodySplit[]);//language
	  // console.log(bodySplit[]);//Plot
	  // console.log(bodySplit[]);//Actors
	  
	  

	
});
	}
	else {
	  let varParam2 = "gremlins";
	  request("http://www.omdbapi.com/?t=" + varParam2 + "&y=&plot=short&apikey=40e9cece", function (error, response, body) {
	  console.log('error:', error); // Print the error if one occurred 
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
	  
	  let bodySplit = body.split(",") 
	  
	  console.log(bodySplit[0]);//title
	  console.log(bodySplit[1]);//year
	  // console.log(bodySplit[]);//IMDB
	  // console.log(bodySplit[]);//RT
	  // console.log(bodySplit[]);//Country
	  // console.log(bodySplit[]);//language
	  // console.log(bodySplit[]);//Plot
	  // console.log(bodySplit[]);//Actors
	  console.log(`if you haven't watched "Gremlins" then you should http:www.imdb.com/title/tt0485947/
	  				it is currenlty on nextflix`)
	});
}



}  else if (searchParam === "do-what-this-says") {

	fs.readFile("random.txt", "utf8", function(error, data){
		if (error) {
			return console.log(error);
		}
	let dataSplit = data.split(",");
	
	
	
	searchParam = dataSplit[0];
	varParam = dataSplit[1];
	

	const spotify = new Spotify({
		id: 'ebc515e4fa854011a46e2ccbcf788058',
		secret: '5a4b4eaf98a84fbd8ebf6a1da92820d6'
		});

   

		spotify.search({ type: 'track', query: varParam }, function(err, data) {
		  if (err) {
		    return console.log('Error occurred: ' + err);
		  }
		 
		var results = data.tracks.items[0];
		console.log(`Artist: ${results.artists[0].name}`);
		console.log(`Song: ${results.name}`);
		console.log(`Link to the song ${results.preview_url}`);
		console.log(`Album: ${results.album.name}`);



});
});





} else {
	console.log(`invalid request ${searchParam}`)
}
