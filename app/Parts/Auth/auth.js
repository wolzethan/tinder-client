(function(){
  var app = angular.module('tinderClient');

  var Auth = [
    '$http',
    'NotificationFactory',
    '$location',

    function($http, NotificationFactory, $location) {

    var auth = this;
    this.login = function(username, password) {
      return $http.post('/auth/login', {
        username : username,
        password : password
      }).success(function(data) {
         auth.user = data.user;
         auth.loggedIn = true;
      }).error(function(err) {
         NotificationFactory.showLoginMessage();
      });
    }

    this.signup = function(username, password) {
      return $http.post('/auth/signup', {
        username : username,
        password : password
      }).success(function(data) {
         auth.user = data.user;
         auth.loggedIn = true;
      }).error(function(err) {
         NotificationFactory.showSignupMessage();
      });
    }

    this.logout = function() {
      auth.loggedIn = false;
      auth.user = null;
      return $http.get('/user/logout');
    }

    this.checkUser = function() {
      return $http.get('/user')
              .success(function(data) {
                  auth.user = data.user;
                  auth.loggedIn = true;
              })
              .error(function(err) {
                  $location.path('/login');
              });
    }

    this.isLoggedIn = function() {
      return $http.get('/user');
    }

  }];

  app.service('Auth', Auth)
}())
