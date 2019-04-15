const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Deck = require("../../models/Deck");

// @route   GET api/decks/test
// @desc    Tests decks route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Deck Route Works" }));

// @route   GET api/decks
// @desc    Get all decks
// @access  Private
// TODO - Convert this to private
router.get("/", (req, res) => {
  Deck.find()
    .then(decks => res.json(decks))
    .catch(err => res.status(404).json({ nodecksfound: "No decks found" }));
});

// @route   POST api/decks
// @desc    Create deck
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newDeck = new Deck({
      title: req.body.title,
      user: req.user.id
    });
    newDeck.save().then(deck => res.json(deck));
  }
);
module.exports = router;
