var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);

fuckYouElon();
setInterval(fuckYouElon, 1000*60*60);

function fuckYouElon() {
    var insultList = [
        "Hey @elonmusk, this is free speech. fuck you.",
        "@elonmusk likes free speech, so i can tell him that i think he fucking sucks. hey elon, you fucking suck.",
        "@elonmusk fucking sucks. #freespeech",
        "i fucking hate @elonmusk and this is free speech.",
        "if @elonmusk blocks this bot he hates free speech!!!!!!",
        "i don't like @elonmusk he fucking sucks",
        "@elonmusk sucks and this is free speech.",
        "@elonmusk smells like shit",
        "@elonmusk stinks.",
    ];

    var insult = insultList[Math.floor(Math.random()*(insultList.length)-1)];

    var tweet = {
        status: insult
    }

    Twitter.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response, status) {
        if (err) {
            console.log("Something went wrong. This is your fault for coding high.");
            console.log(err);
            console.log("Tweet insult: " + insult );
            console.log("Tweet status: " + status);
        } else {
            console.log("Tweet sucessfully posted.");
            console.log("Tweet insult: " + insult );
            console.log("Tweet status: " + status);
            //console.log(data);
        }
    }
}