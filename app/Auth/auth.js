(function(){
  var app = angular.module('tinderClient');

  var Auth = ['$http', function($http) {

    var auth = this;

    auth.user = {};

    this.login = function(username, password) {
      return $http.post('/auth/login', {
        username : username,
        password : password
      }).success(function(data) {
         auth.user = data.user;
      }).error(function(err) {
        alert(err);
      });
    }

    this.signup = function(username, password) {
      Auth.error = null;
      return $http.post('/auth/signup', {
        username : username,
        password : password
      }).success(function(data) {
         auth.user = data.user;
      }).error(function(err) {
        alert(err);
      });
    }

    this.checkUser = function() {
      return $http.get('/user');
    }

  }];

  app.service('Auth', Auth)
}())
