(function(){
  var app = angular.module('tinderClient');

  var potentialMatch = function() {
    return {
      restrict : 'E',
      scope : {
        datasource : '=',
        like       : '&'
      },
      templateUrl : 'views/partials/pot-match.html'
    }
  }

  app.directive('potentialMatch', potentialMatch);
}())
