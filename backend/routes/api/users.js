const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "User Works" }));
// http://localhost:5000/api/users/test

module.exports = router;
