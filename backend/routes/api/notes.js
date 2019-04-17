const express = require("express");
const router = express.Router();

// @route   GET api/notes/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Notes Works" }));

module.exports = router;
