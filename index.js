var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var morgan     = require('morgan');
var uuid       = require('uuid');
var passport   = require('passport');

var config  = require('./config');

mongoose.connect(config.MONGOURI);


app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + "/app"));

// Configuring our Passport Strategies
require('./config/passport/passport')(passport);

app.use(require('express-session')({
  genid : function(req) {
    return uuid.v1()
  },
  secret : 'shhhthisisasecret',
  resave : true,
  saveUninitialized : true
}));
app.use(passport.initialize());
app.use(passport.session());

require('./server/router')(app, passport);

app.get("*", function(req, res, next) {
  res.status(200).sendFile(__dirname + "/app/index.html");
});

app.listen(config.PORT);
console.log("Matchmaker Running On...", config.PORT);
