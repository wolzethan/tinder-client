(function(){
  var app = angular.module('tinderClient');

  var injectParams = ['$scope', 'Tinder'];

  var MainCtrl = function($scope, Tinder) {
    $scope.firstMessage = "Tinder Time!";

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
              console.log(data);
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
              console.log(data.result.match)
            });
      }
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
