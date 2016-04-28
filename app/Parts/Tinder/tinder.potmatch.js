(function(){
  var app = angular.module('tinderClient');

  var Ctrl = function ($scope, Tinder) {
    $scope.isMatch = false;

    $scope.likeOne = function(id) {
      Tinder.likeOne(id)
            .then(function () {
              if(Tinder.results.result) {
                if(Tinder.results.result.match) {
                  alert("You matched!");
                }
                else {
                  alert("No match");
                }
              }
            });
          }
  }
  var injectParams = ['$scope','Tinder'];

  Ctrl.$inject = injectParams;

  var potentialMatch = function() {
    return {
      restrict : 'E',
      scope : {
        datasource : '=',
        like       : '&'
      },
      templateUrl : 'views/partials/pot-match.html',
      controller  : Ctrl
    }
  }


  app.directive('potentialMatch', potentialMatch);
}())
