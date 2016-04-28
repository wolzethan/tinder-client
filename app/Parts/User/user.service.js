(function () {
  var app = angular.module('tinderClient');

  var UserService = ['$http', function($http) {

    var Me = this;
    this.saveToken = function(token) {
      return $http.post('/user/token', {accessToken : token})
                  .success(function(data) {
                    alert("IT WORKED");
                  })
                  .error(function(err) {
                    alert("ERROR");
                  });
            }

    this.checkForToken = function() {
      return $http.get('/user')
              .success(function(data) {
                if(data.user.auth.accessToken) {
                  Me.token = data.user.auth.accessToken;
                }
              })
              .error(function(err) {
                return alert(err);
              })
    }

      return this;
  }];

  app.service('UserService', UserService);
}())
