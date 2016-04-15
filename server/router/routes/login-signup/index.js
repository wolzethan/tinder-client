var express = require('express');
var router  = express.Router();

module.exports = function(passport) {

  router.use('/signup', require('./signup')(passport));
  router.use('/login', require('./login')(passport));

  return router;
}
