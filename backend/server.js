const express = require("express");
const bodyParser = require("body-parser");

// Create express app
const app = express();

// parse requests of content type
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type application json
app.use(bodyParser.json());

// Define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to easy notes app" });
});

// Listen for requests
app.listen(3000, () => {
  console.log("Server is listening to port 3000");
});
