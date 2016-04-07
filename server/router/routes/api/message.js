var express = require('express');
var router = express.Router();
var tinder = require('tinderjs');
var client = new tinder.TinderClient();

// TODO: Create Endpoint to Send Message

router.post('/:user_id', function(req, res, next) {
  if (!req.body.message) {
    return res.send({
      success: false,
      message: "You need to include a message in your request"
    });
  }

  client.authorize(
    req.session.accessToken,
    req.session.userID,
    function() {
      client.sendMessage(
        req.params.user_id,
        req.body.message,
        function(err, result) {
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

module.exports = router;
