// Dependencies
// =============================================================
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");






// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.post("/api/friends", function (req, res) {
    let answerArray = res.body;
    console.log(answerArray);

    // ????
    res.json(answerArray);
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/survey.html"));
});