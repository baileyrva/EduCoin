const express = require("express");
const User = require("mongoose").model("User");

const router = new express.Router();

router.get("/dashboard", (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message.",
    // user values passed through from auth middleware
    user: req.user,
  });
});

router.get("/users", (req, res, next) => {
  return User.find({}, function (err, docs) {
    return res.status(200).json(docs);
  });
});

module.exports = router;
