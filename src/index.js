const express = require("express");
const mongoose = require("mongoose");

const app = express();

const user = "faketwitter";
const pswd = "fake123";

mongoose.connect(`mongodb://${user}:${pswd}@ds121455.mlab.com:21455/twitterdb`, {
    useNewUrlParser: true
});

app.use(require("./routes"));

app.listen(3000, () => {
    console.log("Server start on port 3000");
});