const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const User = require("../../models/User");
const Note = require("../../models/Note");

// @route   GET api/notes/test
// @desc    Tests notes route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Note Route Works" }));

// @route   GET api/notes
// @desc    Get all notes
// @access  Private
// TODO - Auth and match notes made by user
router.get("/", (req, res) => {
  Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(404).json({ nonotesfound: "No notes found" }));
});

// @route   GET api/notes/:id
// @desc    Get specific note, e.g. see its owner
// @access  Private
// TODO - Authenticate and match note
router.get("/:id", (req, res) => {
  Note.findById(req.params.id)
    .then(note => res.json(note))
    .catch(err =>
      res.status(404).json({ nopostfound: "No post found with that id" })
    );
});

// @route   POST api/notes
// @desc    Create note
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newNote = new Note({
      title: req.body.title,
      text: req.body.text,
      user: req.user.id
    });
    newNote.save().then(note => res.json(note));
  }
);

// @route  DELETE api/notes/:id
// @desc   Delete a specific note
// @access Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Check if users logged in
    console.log(req);
    User.findOne({ user: req.user.id }).then(user => {
      Note.findById(req.params.id)
        .then(note => {
          // Check for note owner
          if (note.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }

          // Delete
          note.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ notenotfound: "No note found" }));
    });
  }
);

module.exports = router;
