var express = require('express');
var router  = express.Router();

module.exports = function(passport) {
  router.post('/', passport.authenticate('local-signup'), function(req, res) {

    return res.send({
      success : true,
      user    : req.user
    });

  });

  return router;
}
