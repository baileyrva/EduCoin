const express = require("express");
const User = require("mongoose").model("User");
const CoinRequest = require("mongoose").model("CoinRequest");

const router = new express.Router();

router.get("/dashboard", (req, res) => {
  let allUsers = [];
  return User.find({isStudent:true}, function(err, docs) {
    docs.forEach(async (user, i) => {
      const coinZ = await CoinRequest.find({user: user._id});
      console.log(coinZ);
      allUsers.push(user);
      if (docs.length === i+ 1){
       return res.status(200).json({
        message: "You're authorized to see this teacher dashboard.",
        // user values passed through from auth middleware
        user: req.user,
        students: allUsers
       });

      }
    })
     
  }) 
});

router.get("/users",  (req, res) => {
  console.log("test");
  let allUsers = [];
  return User.find({}, async function (err, docs) {
    console.log(docs);
   docs.forEach(async (user, i) => {
    //  user.pendingRequest = await CoinRequest.find({status: 'pending'});
     allUsers.push(user);
     if (docs.length === i+ 1){
      return res.status(200).json(allUsers);
     }
   })
    
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

router.post("/coin-subtraction", (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },

    { $set: { Coin: req.user.Coin - 5 } },
  ).then(result => res.json(result))
  .catch(err => res.status(422).json(err));
});

router.post("/coin-approve", (req, res) => {
  console.log(req.body);
  User.findOneAndUpdate(
    { _id: req.body._id },

    { $set: { Coin: Number(req.body.Coin) + 100, pendingRequest: false } },
  ).then(result => {
    result.Coin = Number(req.body.Coin) + 100, pendingRequest = false;
    
    CoinRequest.findOneAndUpdate({ user: req.body._id }, 
      { $set: { status:  'approved' } }, {new: true}, function (err, coinResult){
       console.log(coinResult);
       res.json(result);
    })
  }) 
  .catch(err => res.status(422).json(err));
});

router.post("/coin-deny",  (req, res) => {
  User.findOneAndUpdate(
    {_id: req.body._id},
    {$set: {pendingRequest: false }}

  ).then(result => {
    res.json(result);
  })
});

router.post("/coin-request", (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },

    { $set: { pendingRequest: true } },
  ).then(result => res.json(result))
  .catch(err => res.status(422).json(err));
});

router.get("/coin-request", (req, res) => {
  if (!req.user) {
    return res.status(401);
  }
  return User.find({ user: req.user._id }, function (err, result) {
    return res.json(result);
  });
});

module.exports = router;
