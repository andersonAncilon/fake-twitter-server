//Importing the tweet model
const Tweet = require("../models/Tweet");

//Exporting the controller 
module.exports = {
    //Listing the tweets
    async index(req, res) {
        const tweets = await Tweet.find({}).sort("-createdAt");

        return res.json(tweets);
    },

    //Saving the tweets
    async store(req, res) {
        const tweet = await Tweet.create(req.body);

        req.io.emit("tweet", tweet);

        return res.json(tweet);
    }
};

