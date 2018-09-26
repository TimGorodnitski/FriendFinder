let express = require("express");
var app = express();


app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.post("/api/friends", function (req, res) {
    let answerArray = res.body;
    console.log(answerArray);

    // ????
    res.json(answerArray);
});