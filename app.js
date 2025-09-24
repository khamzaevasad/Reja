console.log("server is running");
const express = require("express");
const fs = require("fs");
const app = express();

// MongoDB connect
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.log("ERORR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1: start code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  2: session Code

//  3: Views Code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: routing code
app.post("/create-item", (req, res) => {
  console.log("user intered /create-item");
  const newReja = req.body.reja;
  db.collection("plans").insertOne({ reja: newReja }, (err, data) => {
    console.log(data.ops[0]);
    res.json(data.ops[0]);
  });
});

app.get("/", function (req, res) {
  console.log("user intered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log("Error:", err);
        res.end("Something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

// Author page
app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

module.exports = app;
