const express = require("express");
const router = express.Router();

const Deck = require("../../models/Deck");
const User = require("../../models/User");
const Card = require("../../models/Card");

// @route   GET api/cards/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

// @route   GET api/cards
// @desc    Grab all cards
// @access  Private
// TODO - Auth and match decks made by user
router.get("/", (req, res) => {
  Card.find()
    .then(cards => res.json(cards))
    .catch(err => res.status(404).json({ nocardsfound: "No decks found" }));
});

module.exports = router;
