(function(){
  var app = angular.module('tinderClient');

  var jumbotron = function() {
    return {
      restrict : "E",
      templateUrl : 'views/partials/home/jumbotron.html'
    }
  }

  app.directive('jumbotron', jumbotron);
}())
