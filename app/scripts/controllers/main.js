(function(){
  var app = angular.module('babyCerebro');

  var injectParams = ['$scope'];

  var MainCtrl = function($scope) {
    $scope.firstMessage = "WELCOME TO YOUR NEW APP!";
  }

  MainCtrl.$inject = injectParams;
  app.controller('MainCtrl', MainCtrl);
}())
