//Importing the dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//Using socket.io to realtime listen 
const server = require("http").Server(app);
const io = require("socket.io")(server);

//Connecting to the 
mongoose.connect("mongodb://anderson:dan123@ds121455.mlab.com:21455/twitterdb", {
    useNewUrlParser: true
});

//Passing to the next req
app.use((req, res, next) => {
    req.io = io;

    return next();
});

//Enabling cors policy
app.use(cors());

//Enabling json format to the express
app.use(express.json());

//Importing the routes
app.use(require("./routes"));

//socket.io listening on port 3000
server.listen(3000, () => {
    console.log("Server start on port 3000");
});