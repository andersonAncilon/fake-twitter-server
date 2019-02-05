const express = require("express");

const routes = express.Router();

const TweetController = require("./controllers/TweetController");

routes.get("/tweets", TweetController.index);
routes.post("/tweets", TweetController.index);

module.exports = routes;