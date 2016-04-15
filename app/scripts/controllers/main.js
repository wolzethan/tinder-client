(function(){
  var app = angular.module('tinderClient');

  var injectParams = ['$scope', 'Tinder', 'Auth', '$location'];

  var MainCtrl = function($scope, Tinder, Auth, $location) {
    $scope.firstMessage = "Welcome To Your Tinder Assistant!";

    //NOTE: First Call should be a call to check if user is logged in
    //If user is not logged in redirect to the log in window....

    function init() {
      $scope.loggedIn = false;
      Auth.checkUser()
          .success(function(info) {
            console.log(info);
            if(info.success) {
              return $scope.loggedIn = true;
            }

            return $location.path('/login');
          });
    }

    init();

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

    $scope.getHistory = function() {
      Tinder.getHistory()
            .success(function(data){
              console.log(data);
            });
    }

    $scope.sendMessage = function(id, message) {
      Tinder.sendMessage(id, message)
            .success(function(data) {
              console.log(data);
            });
    }


  }

  MainCtrl.$inject = injectParams;
  app.controller('MainCtrl', MainCtrl);
}())
