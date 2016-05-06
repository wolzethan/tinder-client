(function() {
  var app = angular.module('tinderClient');

  var TinderCtrl = [
    '$scope',
    'Tinder',
    'UserService',
    'Auth',

    function($scope, Tinder, UserService, Auth) {
      $scope.authenticated = false;
      $scope.init = false;

      function returnMatches () {
        Tinder.getHistory()
              .then(function() {
                $scope.history = Tinder.history;
                UserService.setMatches(Tinder.history.matches);
              });
      }
      function getRecs () {
        Tinder.getRecs()
              .then(function () {
                $scope.recs = Tinder.potentialMatches;
              })
      }

      function init() {
        Auth.checkUser()
          .then(function() {
            Auth.loggedIn = true;
            $scope.matches = Auth.user.matches;
            UserService.checkForToken()
              .then(function() {
                if(UserService.token !== 'no auth') {
                  $scope.authenticated = true;
                  Tinder.setToken(UserService.token)
                    .then(function() {
                      getRecs();
                      returnMatches();
                      $scope.init = true;
                    });
                } else {
                  $scope.authenticated = false;
                  $scope.init = true;
                }
              });
          });
      }

      init();

      $scope.getRecommendations = function() {
        Tinder.getRecs()
          .then(function() {
            $scope.recs = Tinder.potentialMatches;
          });
      }

      $scope.likeAll = function() {
        var accounts = angular.copy($scope.recs);
        var results = [];
        for (var i = 0; i < accounts.length; i++) {
          Tinder.likeOne(accounts[i]._id)
            .then(function() {
              results.push(Tinder.results);
            });
        }
      }

      $scope.likeOne = function(id) {
        Tinder.likeOne(id)
          .then(function() {
            console.log(Tinder.results);
            $scope.likeResult = Tinder.results;
          })
      }

      $scope.getHistory = function() {
        Tinder.getHistory()
          .then(function() {
            $scope.history = Tinder.history;
          });
      }

      $scope.sendMessage = function(id, message) {
        Tinder.sendMessage(id, message)
          .then(function() {
            $scope.lastMessage = Tinder.lastMessageResult;
          });
      }

      $scope.start = function(token) {
        Tinder.setToken(token)
          .then(function() {
            $scope.authenticated = true;
          });
      }

    }
  ];

  app.controller('TinderCtrl', TinderCtrl);
}())
