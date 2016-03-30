var LocalStrategy = require('passport-local');
var Client        = require('../../server/db/models/client');

module.exports = function(passport) {

  passport.use('local-signup', new LocalStrategy({
        passReqToCallback : true
    }, function(req, user, password, done) {

    }));

  passport.use('local-login', new LocalStrategy({
       passReqToCallback : true
  }, function (req, user, password, done) {

  }));
}
