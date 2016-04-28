var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var morgan     = require('morgan');
var uuid       = require('uuid');
var passport   = require('passport');
var session    = require('express-session');
var MongoStore = require('connect-mongo/es5')(session);
var cluster    = require('cluster');
var NumCPUs    = require('os').cpus().length;

if(cluster.isMaster) {

  for(var i = 0; i < NumCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    cluster.fork();
  });

} else {
var config  = require('./config');

mongoose.connect(config.MONGOURI);

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + "/app"));

// Configuring our Passport Strategies
require('./config/passport/passport')(passport);

app.use(session({
  genid : function(req) {
    return uuid.v1()
  },
  secret : 'shhhthisisasecret',
  store : new MongoStore({
    url : config.MONGOURI
  }),
  resave : false,
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
}
