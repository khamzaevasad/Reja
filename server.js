console.log("server is running");
const express = require("express");
const app = express();
const http = require("http");

// 1: start code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  2: session Code

//  3: Views Code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: routing code
app.get("/hello", function (req, res) {
  res.end(`<h1 style="color: red">Hi NodeJs it's my first Project</h1>`);
});

app.get("/gift", function (req, res) {
  res.end(`<h1 style="color: blue">hi welcome to gift page</h1>`);
});

const server = http.createServer(app);
let PORT = 3200;

server.listen(PORT, function () {
  console.log(`Server is running succesfully on port ${PORT}`);
});
