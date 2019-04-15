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
// TODO - Auth and match decks made by user
router.get("/", (req, res) => {
  Deck.find()
    .then(decks => res.json(decks))
    .catch(err => res.status(404).json({ nodecksfound: "No decks found" }));
});

// @route   GET api/decks/:id
// @desc    Get specific deck, e.g. see its owner
// @access  Private
// TODO - Authenticate and match deck
router.get("/:id", (req, res) => {
  Deck.findById(req.params.id)
    .then(deck => res.json(deck))
    .catch(err =>
      res.status(404).json({ nopostfound: "No post found with that id" })
    );
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
