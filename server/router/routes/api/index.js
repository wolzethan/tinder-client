var express = require('express');
var router  = express.Router();
var tinder  = require('tinderjs');

var client  = new tinder.TinderClient();

router.use(function(req, res, next) {
  next();
});

router.get('/me', function(req, res) {
  if(req.user) {
    return res.send(req.user);
  } else {
    return res.send({
      success : false,
      error   : "No user logged in"
    });
  }
});

router.use('/recs', require('./recs'));
router.use('/start', require('./start'));
router.use('/like', require('./like'));

module.exports = router;
