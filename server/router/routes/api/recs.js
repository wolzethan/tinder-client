var express = require('express');
var router  = express.Router();
var tinder  = require('tinderjs');
var client  = new tinder.TinderClient();

  router.get('/', function(req, res, next) {
      client.authorize(
        req.session.accessToken,
        req.session.userID, function() {
          client.getRecommendations(10, function(err, results) {
            if(err) {
              return res.status(401).send({
                success : false,
                error   : err
              });
            }

            return res.send({
              success : true,
              data    : results
            });
          });
      });
  });

module.exports = router;
