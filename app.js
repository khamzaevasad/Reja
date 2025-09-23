console.log("server is running");
const express = require("express");
const fs = require("fs");
const app = express();

// MongoDB connect

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
  console.log(req.body);
  res.json({ test: "Succes" });
});

app.get("/", function (req, res) {
  res.render("reja");
});

// Author page

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

module.exports = app;
