const fs = require("fs");
const express = require("express");
const axios = require("axios");
const path = require("path");
const db = require("../../../db/db.json")
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

app.get("/api/notes", function(req, res) {
    fs.readFile(`${db}`, function(err, data) {
        if (err) throw err;
        res.json(db);
    });
});

app.post("/api/notes", function(req, res) {
    const newEntry = req.body;
    fs.appendFile(`${db}`, newEntry, function(err, data) {
        if (err) throw err;
    });
});

app.delete("/api/notes/:id", function(req, res) {
    fs.readFile(`${db}`, function(err, data) {

    });
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  