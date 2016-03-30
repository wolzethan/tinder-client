var express = require('express');
var router  = express.Router();

router.get('/', function(req, res, next) {
  return res.status(200).json(
    {
        "success" : true,
        "message" : "Welcome to Cerebro's API!"
    });
});


module.exports = router;
