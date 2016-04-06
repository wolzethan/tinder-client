var express = require('express');
var router = express.Router();
var tinder = require('tinderjs');
var client = new tinder.TinderClient();

router.route('/')
  .post(function(req, res, next) {

    var id = req.body.id;

    client.authorize(
      req.session.accessToken,
      req.session.userID,
      function() {
        client.like(id, function(err, result) {

          if (err) {
            return res.send({
              success: false,
              error: err
            });
          }

          return res.send({
            success: true,
            result: result
          });
        });
      });
  });

router.post('/all', function(req, res, next) {
var accounts = req.body.users;
var results = [];

client.authorize(
  req.session.accessToken,
  req.session.userID,
  function() {

    for (var i = 0; i < accounts.length; i++) {
      client.like(accounts[i]._id, function(err, result) {
        if (err) {
          return console.error(err);
        }

        if (result && result.match) {
          results.push(result);
        }

        if(i === accounts.length - 1) {
          return res.send({
            success : true,
            results : results
          });
        }

      });
    }


  });
});

module.exports = router;
