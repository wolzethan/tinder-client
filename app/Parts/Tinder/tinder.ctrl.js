(function () {
  var app = angular.module('tinderClient');

var TinderCtrl = [
  '$scope',
  'Tinder',

  function ($scope, Tinder) {
    $scope.authenticated = false;

    $scope.getRecommendations = function() {
      Tinder.getRecs()
            .then(function() {
              $scope.recs = Tinder.potentialMatches;
            });
    }

    $scope.likeAll = function() {
      var accounts = angular.copy($scope.recs);
      var results  = [];
      for(var i = 0; i < accounts.length; i++) {
        Tinder.likeOne(accounts[i]._id)
              .then(function() {
                results.push(Tinder.results);
              });
          }
    }

    $scope.likeOne = function(id) {
      Tinder.likeOne(id)
            .then(function() {
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
            .then(function () {
              $scope.lastMessage = Tinder.lastMessageResult;
            });
    }

    $scope.start = function(token) {
      Tinder.setToken(token)
            .then(function () {
              $scope.authenticated = true;
            });
    }

}];

  app.controller('TinderCtrl', TinderCtrl);
}())
