(function(){
  var app = angular.module('tinderClient');

  var Auth = ['$http', function($http) {

    this.login = function(username, password) {
      return $http.post('/auth/login', {
        username : username,
        password : password
      });
    }

    this.signup = function(username, password) {
      return $http.post('/auth/signup', {
        username : username,
        password : password
      });
    }

    return this;
  }];

  app.service('Auth', Auth)
}())
