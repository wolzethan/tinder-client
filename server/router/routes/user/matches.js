var express = require('express');
var router = express.Router();


module.exports = function(User) {

  function handleMatches(req, res, next) {
    if(req.body.matches) {
      User.findOne({'_id' : req.user._id})
          .exec(function(err, user) {
            if(err) {
              throw err;
            }

            if(!user) {
              throw "NO USER";
            }

            user.matches = req.body.matches;
            user.save(function(err) {
              if(err) {
                throw err;
              }

              res.status(200).send("SUCCESS");
            });
          });
    } else if(req.body.match) {
      User.findOne({'_id' : req.user._id})
          .exec(function(err, user) {
            if(err) {
              throw err;
            }

            if(!user) {
              throw "NO USER";
            }

            user.matches.push(req.body.match);
            user.save(function(err) {
              if(err) {
                throw err;
              }

              res.status(200).send("SUCCESS");
            });
          });
    }
  }

  router.put('/', handleMatches);

  return router;
}
