const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path"); // part of nodeJS core lib

const cards = require("./routes/api/cards");
const decks = require("./routes/api/decks");
const notes = require("./routes/api/notes");
const users = require("./routes/api/users");

// Define express
const app = express();

// // Connect database
// const db = require("./config/keys").mongoURI;

// // Connect to mongoDB
// mongoose
//   .connect(db)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// // Passport middleware
// app.use(passport.initialize());

// // // Passport config
// require("./config/passport")(passport);

// // Use Routes
app.use("/api/users", users);

const router = express.Router();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Serving running on ${port}`));
