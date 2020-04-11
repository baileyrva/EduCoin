const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  let isStudent = email.trim().match(/.*@[a-z0-9_-]+\.stu$/i)!== null;
  let isTeacher = email.trim().match(/.*@[a-z0-9_-]+\.edu$/i)!== null;
  const userData = {
    email: email.trim(),
    password: password.trim(),
    name: req.body.name.trim(),
    isTeacher, 
    isStudent, 
    Coin: isStudent ? 100 : 0
  };

  const newUser = new User(userData);
  newUser.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});
