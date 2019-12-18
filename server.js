const fs = require("fs");
const express = require("express");
const axios = require("axios");
const path = require("path");
const db = "./db/db.json"
const PORT = process.env.PORT || 3650;
const app = express();
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/api/notes", function(req, res) {
    fs.readFile(db, "utf8", function(err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

app.post("/api/notes", function(req, res) {
    fs.readFile(db, "utf8", function(err, data){
        const table = JSON.parse(data);
        table.push(req.body);
        fs.writeFile(db, JSON.stringify(table), function(err){
            if (err) return res.json({success: false, error: err})
            res.json({success: true})
        });
    });
});

app.delete("/api/notes/:id", function(req, res) {
    fs.readFile(db, function(err, data) {
        
    });
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  