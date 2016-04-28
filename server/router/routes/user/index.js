var express = require('express');
var router  = express.Router();

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

function UserAuthorized(req, res, next) {
  if(!req.user) {
    return res.send({
      success : false,
      error   : "User not signed in"
    });
  }
  delete req.user.password;
  next();
}

module.exports = router;
