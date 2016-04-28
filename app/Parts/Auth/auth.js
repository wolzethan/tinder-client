(function(){
  var app = angular.module('tinderClient');

  var Auth = [
    '$http',
    'NotificationFactory',

    function($http, NotificationFactory) {

    var auth = this;
    this.login = function(username, password) {
      return $http.post('/auth/login', {
        username : username,
        password : password
      }).success(function(data) {
         auth.user = data.user;
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
      }).error(function(err) {
         NotificationFactory.showSignupMessage();
      });
    }

    this.logout = function() {
      return $http.get('/user/logout');
    }

    this.checkUser = function() {
      return $http.get('/user')
              .success(function(data) {
                auth.user = data.user;
              })
              .error(function(err) {
                NotificationFactory.showError(err);
              });
    }

  }];

  app.service('Auth', Auth)
}())
