(function(){
  var app = angular.module('tinderClient');
  var matchView = function() {
      return {
        restrict : 'E',
        templateUrl : 'views/partials/match.html',
        scope : {
          datasource : '='
        }
      }
  }

  app.directive('matchView', matchView);
}());
