var express = require('express');
var router  = express.Router();
var request = require('request');
var BASE    = "https://graph.facebook.com/v2.5/"

router.post('/', function(req, res, next) {
  if(!req.body.token) {
    return res.status(401).send({
      success : false,
      message : "No Token Provided"
    });
  }

  var token = req.body.token;

  var options = {
    url : BASE + 'me?access_token=' + req.body.token,
    method : 'GET'
  }

  request(options, function(err, response, body) {
    if(err) {
      return res.send(err);
    }

    response = JSON.parse(response.body);
    req.session.userID = response.id;
    req.session.accessToken = token;

    return res.send(req.session);
  });

});

module.exports = router;
