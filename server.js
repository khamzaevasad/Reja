const http = require("http");
const mongodb = require("mongodb");

let db;

const connectionString =
  "mongodb+srv://Khamzaevasad:Sb3PmKbyvrzKwLlN@cluster0.7usnmhb.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("Error on Connection MongoDB");
    else {
      console.log("MongoDB connection Succes");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3002;
      server.listen(PORT, function () {
        console.log(
          `Server is running succesfully on port ${PORT} http://localhost:${PORT}`
        );
      });
    }
  }
);
