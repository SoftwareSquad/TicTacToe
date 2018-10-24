const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
var fs = require('fs');
const app = express();

//location of all static files such as "index.html"
var files = path.normalize("./dist");

//setup
//app is able to get static files such as CSS files
//app.use(bodyParser());
app.use('/', express.static(files));

//get request on the index page
//localhost:3000 or https://tictactoe-hugb.herokuapp.com/
app.get("/", (req, res) => {
    //send the index file of the root "./builds"
    res.status(200).sendfile("index.html", {root: files});
});

