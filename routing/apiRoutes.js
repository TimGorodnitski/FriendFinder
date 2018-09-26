let express = require("express");
var app = express();
let friends = require("../data/friends.js");
let path = require("path");


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        let answerArray = res.body;
        console.log(answerArray);
        friends.push(answerArray);
        // ????
        res.json(answerArray);
    });
};