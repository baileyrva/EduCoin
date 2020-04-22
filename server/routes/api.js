const express = require("express");
const User = require("mongoose").model("User");
const CoinRequest = require("mongoose").model("CoinRequest");

const router = new express.Router();


router.get("/dashboard", (req, res) => {
  return User.find({isStudent:true}, function(err, docs) {
     return res.status(200).json({
      message: "You're authorized to see this teacher dashboard.",
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

router.get("/student", (req, res) => {
  return User.find({_id:req.user._id}, function(err, docs) {
     return res.status(200).json({
      message: "You're authorized to your student dashboard.",
      // user values passed through from auth middleware
      user: req.user,
      students: docs
    });
  }) 
});

router.post("/coin-request", (req, res) => {
  if (!req.user){
    return res.status(401)
  }
  return CoinRequest.create({user: req.user._id}, function(err, result){
    return res.status(200).json(result)
  })
})

router.get("/coin-request", (req, res) => {
  if (!req.user){
    return res.status(401)
  }
  return CoinRequest.find({user: req.user._id}, function(err, result){
    return res.json(result)
  })
})


module.exports = router;
