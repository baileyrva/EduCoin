const express = require("express");
const User = require("mongoose").model("User");

const router = new express.Router();

router.get("/dashboard", (req, res) => {
  return User.find({ isStudent: true }, function (err, docs) {
    return res.status(200).json({
      message: "You're authorized to see this teacher dashboard.",
      // user values passed through from auth middleware
      user: req.user,
      students: docs,
    });
  });
});

router.get("/users", (req, res, next) => {
  return User.find({}, function (err, docs) {
    return res.status(200).json(docs);
  });
});

router.get("/user", (req, res, next) => {
  return User.findOne({ email: req }, function (err, docs) {
    return res.status(200).json(docs);
  });
});

router.get("/students");
router.get("/student", (req, res) => {
  return User.find({ _id: req.user._id }, function (err, docs) {
    return res.status(200).json({
      message: "You're authorized to your student dashboard.",
      // user values passed through from auth middleware
      user: req.user,
      students: docs,
    });
  });
});

router.post("/userCoinSubtraction", (req, res, next) => {
  User.findOneAndUpdate(
    { _id: req.user._id },

    { $set: { Coin: req.user.Coin - 5 } },

    function (err, doc) {
      if (err) {
        console.log("update document error");
      } else {
        console.log("update document success");

        console.log(doc);
        return true; 
      }
    }
  );
});

module.exports = router;
