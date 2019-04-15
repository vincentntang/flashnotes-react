const express = require("express");
const router = express.Router();

// @route   GET api/decks/test
// @desc    Tests decks route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
