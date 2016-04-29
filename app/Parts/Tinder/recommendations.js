(function () {
  var app = angular.module('tinderClient');

  var Recommendation = function () {

    var Controller = ['Tinder', '$scope', function(Tinder, $scope) {
      function getLastPhoto(user) {
        return user.photos[0].processedFiles[3].url;
      }

      $scope.user = $scope.datasource;
      $scope.photo = getLastPhoto($scope.user);

      

    }]

    return {
      restrict : 'E',
      templateUrl : 'views/templates/rec.html',
      controller : Controller,
      scope : {
        datasource : '='
      }
    }
  }

  app.directive('recUser', Recommendation);
}())
