(function(){
  var app = angular.module('tinderClient');

  var injectParams = ['$scope', 'Tinder', 'Auth'];

  var MainCtrl = function($scope, Tinder, Auth) {
    $scope.firstMessage = "Welcome To Your Tinder Assistant!";

    $scope.start = function(token) {
      Tinder.setToken(token)
        .success(function(data) {
          if(data.accessToken) {
            $scope.authenticated = true;
          }
        });
    }

    $scope.getRecommendations = function() {
      $scope.recs = {};
      Tinder.getRecs()
            .success(function(data) {
              if(data.success) {
                $scope.recs = data.data.results;
              }
            });
    }

    $scope.likeAll = function() {
      var accounts = angular.copy($scope.recs);
      for(var i = 0; i < accounts.length; i++) {
        Tinder.likeOne(accounts[i]._id)
            .success(function(data) {
              if(data.result.match) {
                console.log(data.result);
              }
            });
          }
    }

    $scope.login = function(username, password) {
      Auth.login(username, password)
          .success(function(data) {
            if(!data.success) {
              return console.log("You are not logged in!");
            } else {
              $scope.me = data.user;
            }
          });
    }

    $scope.signup = function(username, password) {
      Auth.signup(username, password)
          .success(function(data) {
            if(data.success) {
                $scope.me = data.user;
            }
            else {
              console.log(data);
            }
          });
    }

    $scope.likeOne = function(id) {
      Tinder.likeOne(id)
            .success(function(data) {
              console.log(data);
            });
    }


  }

  MainCtrl.$inject = injectParams;
  app.controller('MainCtrl', MainCtrl);
}())
