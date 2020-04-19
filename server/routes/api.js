const express = require("express");
const User = require("mongoose").model("User");

const router = new express.Router();

router.get("/dashboard", (req, res) => {
  return User.find({isStudent:true}, function(err, docs) {
     return res.status(200).json({
      message: "You're an authorized user of EduCoin!",
      // user values passed through from auth middleware
      user: req.user,
      students: docs
    });
  }) 
});

router.get("/users", (req, res, next) => {
  return User.find({}, function (err, docs) {
    return res.status(200).json(docs);
  });
});

router.get("/user", (req, res, next) => {
  return User.findOne({email: req}, function (err, docs) {
    return res.status(200).json(docs);
  });
});

router.get("/students");

module.exports = router;
