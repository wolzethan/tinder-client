module.exports = function(app, passport) {
  app.use('/api', require('./routes/api'));
  app.use('/auth', require('./routes/login-signup')(passport));
}
