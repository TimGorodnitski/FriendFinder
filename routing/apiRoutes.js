let express = require("express");
var app = express();
let friends = require("../data/friends.js");
let path = require("path");


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        let newUserData = req.body;
        let parsedScores = req.body.scores.map(Number);

        newUserData.scores = parsedScores;

        friends.push(newUserData);

        let differences = [];

        for (var x = 0; x < friends.length; x++) {

            totalDifference = 0;

            for (var y = 0; y < friends[x].scores.length; y++) {
                totalDifference += Math.abs(newUserData.scores[y] - friends[x].scores[y]);
            }

            differences.push(totalDifference)
        }
        let match = differences.indexOf(Math.min(...differences));

        res.json(friends[match]);
    });
};