(function(){
  var app = angular.module('tinderClient');

  var sideNav = function() {
    return {
      restrict : "E",
      templateUrl : 'views/partials/nav.html'
    }
  }

  app.directive('sideNav', sideNav);
}())
