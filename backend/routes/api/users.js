const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// Load user model
const User = require("../../models/User");

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

// @route   GET api/users/register
// @desc    Register user
// @access  Publicrouter.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
