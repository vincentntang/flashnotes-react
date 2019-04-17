const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

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
// TODO - Grab all cards specific to that user
router.get("/", (req, res) => {
  Card.find()
    .then(cards => res.json(cards))
    .catch(err => res.status(404).json({ nocardsfound: "No decks found" }));
});

// @route   GET api/cards
// @desc    Grab a single card
// @access  Private
// TODO - Grab card, but make sure it's private and owned by user
router.get("/:id", (req, res) => {
  Card.findById(req.params.id)
    .then(card => res.json(card))
    .catch(err =>
      res.status(404).json({ nocardfound: "No card found with that id" })
    );
});

// @route   POST api/cards
// @desc    Create cards
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Check if deck belongs to that user
    Deck.findById(req.body.deckID)
      .then(deck => {
        if (deck.user == req.user.id) {
          const newCard = new Card({
            question: req.body.question,
            answer: req.body.question,
            deck: req.body.deckID, // user selects a deck and chooses
            difficulty: 0.3,
            daysBetweenReviews: 1,
            note: req.body.note,
            user: req.user.id
          });
          newCard.save().then(card => res.json(card));
        } else {
          return res
            .status(401)
            .json({ notRightUser: "This is not user's cards" });
        }
      })
      .catch(err => console.log(err));
  }
);

// @route   DELETE api/cards
// @desc    Delete cards
// @access  Private
router.post(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Card.findById(req.params.id);
  }
);

module.exports = router;
