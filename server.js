var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;
// var players = require();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var players = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/api", function(req, res) {
    res.json(Object.assign({}, { players: players },));
});

app.post("/api", function(req, res) {
    players.push(req.body)
    res.json(req.body);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});