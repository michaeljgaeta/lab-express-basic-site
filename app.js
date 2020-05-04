const express = require("express");

const app = express();

//app.use(express.static("style"));

// ...
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (request, response) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.get("/style.css", (request, response) => {
  response.sendFile(__dirname + "public/style.css");
});

app.get("*", (request, response) => {
  response.send("i don't know who I am");
});

app.listen(4000);
