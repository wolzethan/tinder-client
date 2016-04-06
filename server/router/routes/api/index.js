var express = require('express');
var router  = express.Router();
var tinder  = require('tinderjs');

var client  = new tinder.TinderClient();

router.use(function(req, res, next) {
  next();
});

router.use('/recs', require('./recs'));
router.use('/start', require('./start'));
router.use('/like', require('./like'));

module.exports = router;
