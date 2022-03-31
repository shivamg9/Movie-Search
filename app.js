var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    
    var searchedMovie = req.query.searchValue;
    
    var queryString = "http://omdbapi.com/?s=" + searchedMovie + "&apikey=INSERT_YOUR_API_KEY_HERE";
    
    
    request(queryString, function(error, response, body){
    if(!error && response.statusCode == 200){
        var parseData = JSON.parse(body);
        res.render("results", {data: parseData});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER STARTED");
});
