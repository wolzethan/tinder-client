var express = require('express');
var router  = express.Router();

router.use(UserAuthorized);

router.get('/', function(req, res, next) {
  return res.send({
    success : true,
    user    : req.user
  });
});

function UserAuthorized(req, res, next) {
  if(!req.user) {
    return res.send({
      success : false,
      error   : "User not signed in"
    });
  }
}

module.exports = router;
