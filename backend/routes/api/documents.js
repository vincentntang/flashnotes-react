const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const User = require("../../models/User");
const Document = require("../../models/Document");

// @route   GET api/documents/test
// @desc    Tests documents route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Document Route Works" }));

// @route   GET api/documents
// @desc    Get all documents
// @access  Private
// TODO - Auth and match documents made by user
router.get("/", (req, res) => {
  Document.find()
    .then(documents => res.json(documents))
    .catch(err =>
      res.status(404).json({ nodocumentsfound: "No documents found" })
    );
});

// @route   GET api/documents/:id
// @desc    Get specific document, e.g. see its owner
// @access  Private
// TODO - Authenticate and match document
router.get("/:id", (req, res) => {
  Document.findById(req.params.id)
    .then(document => res.json(document))
    .catch(err =>
      res.status(404).json({ nopostfound: "No post found with that id" })
    );
});

// @route   POST api/documents
// @desc    Create document
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newDocument = new Document({
      title: req.body.title,
      text: req.body.text,
      user: req.user.id
    });
    newDocument.save().then(document => res.json(document));
  }
);

// @route  DELETE api/documents/:id
// @desc   Delete a specific document
// @access Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Check if users logged in
    console.log(req);
    User.findOne({ user: req.user.id }).then(user => {
      Document.findById(req.params.id)
        .then(document => {
          // Check for document owner
          if (document.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }

          // Delete
          document.remove().then(() => res.json({ success: true }));
        })
        .catch(err =>
          res.status(404).json({ documentnotfound: "No document found" })
        );
    });
  }
);

module.exports = router;
