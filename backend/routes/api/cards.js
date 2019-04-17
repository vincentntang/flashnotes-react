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
// TODO - Auth and match decks made by user
router.get("/", (req, res) => {
  Card.find()
    .then(cards => res.json(cards))
    .catch(err => res.status(404).json({ nocardsfound: "No decks found" }));
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
module.exports = router;
