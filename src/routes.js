//Routes file, with the request routes

const express = require("express");

const routes = express.Router();

//Declaring the controllers 
const TweetController = require("./controllers/TweetController");
const LikeController = require("./controllers/LikeController");

//Declaring the http request routes
routes.get("/tweets", TweetController.index);
routes.post("/tweets", TweetController.store);

routes.post("/likes/:id", LikeController.store);

//Exporting the routes
module.exports = routes;