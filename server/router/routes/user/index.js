var express = require('express');
var router  = express.Router();
var User    = require('../../../db/models/user');

router.use(UserAuthorized);

router.get('/', function(req, res, next) {
  return res.send({
    success : true,
    user    : req.user
  });
});

router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

router.post('/token', function(req, res, next) {
  User.findOne({'_id' : req.user._id})
      .select('auth')
      .exec(function(err, user) {
        if(err) {
          throw err;
        }

        if(!user) {
          return res.status(401).send("Not signed in");
        }

        user.auth.accessToken = req.body.accessToken;
        user.save(function(err) {
          if(err) {
            return res.status(401).send({
              success : false
            });
          }
          else {
            res.status(200).send({
              success : true
            });
          }
        });
      });
});

function UserAuthorized(req, res, next) {
  if(!req.user) {
    return res.send({
      success : false,
      error   : "User not signed in"
    });
  }
  next();
}

module.exports = router;
