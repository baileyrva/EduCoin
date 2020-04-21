const jwt = require("jsonwebtoken");
const User = require("mongoose").model("User");
const PassportLocalStrategy = require("passport-local").Strategy;
const config = require("../../config");

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    session: false,
    passReqToCallback: true,
  },
  (req, email, password, done) => {
    const userData = {
      email: email.trim(),
      password: password.trim(),
    };

    return User.find({}, function (err, docs) {
      if (!err) {
        
        process.exit();
      } else {
        throw err;
      }
    });
  }
);
