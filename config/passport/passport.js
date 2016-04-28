var LocalStrategy = require('passport-local');
var User = require('../../server/db/models/user');

module.exports = function(passport) {


  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    passReqToCallback: true
  }, function(req, username, password, done) {
    process.nextTick(function() {

      User.findOne({
        'username': username
      })
      .select('-password')
      .exec(function(err, user) {
        if (err) {
          return done(err);
        }

        if (user) {
          return done(null, false, {
            message: 'Username Taken!'
          });
        }

        var newUser = new User();

        newUser.username = username;
        newUser.password = password;

        newUser.save(function(err) {
          if (err) {
            return done(err);
          }
          return done(null, newUser);
        });
      });
    });
  }));

  passport.use('local-login', new LocalStrategy({
    passReqToCallback: true
  }, function(req, username, password, done) {
    User.findOne({
      'username': username
    })
    .exec(function(err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false, {
          message: "User not found with that name"
        });
      }

      if (!user.validPassword(password)) {
        return done(null, false, {
          message: "Username or Password incorrect"
        });
      }

      return done(null, user);
    });
  }));

}
