const fs = require("fs");
const express = require("express");
const axios = require("axios");
const path = require("path");

const PORT = 3650;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../../notes.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../index.html"));
});




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  