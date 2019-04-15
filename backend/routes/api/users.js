const express = require("express");
const router = express.Router();

/**
 * Router appends additional routing information. These two are the same:
 * app.use("/api/users", users);
 * app.use("/api/users", router.get("/test", (req, res) => res.json({ msg: "User Works" }))
 * http://localhost:5000/api/users/test
 */
// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "User Works" }));

module.exports = router;
