(function(){
  var app = angular.module('tinderClient');

  var injectParams = ['$scope', 'Tinder', 'Auth', '$location'];

  var MainCtrl = function($scope, Tinder, Auth, $location) {
    $scope.firstMessage = "Welcome To Your Tinder Assistant!";

    //NOTE: First Call should be a call to check if user is logged in
    //If user is not logged in redirect to the log in window....

    function init() {
      if(!Auth.user) {
        $scope.loggedIn = false;
        $location.path('/login');
      } else {
        $scope.loggedIn = true;
      }
    }

    init();

    $scope.start = function(token) {
      Tinder.setToken(token)
        .success(function(data) {
          if(data.accessToken) {
            $scope.authenticated = true;
          }
        });
    }
    
  }

  MainCtrl.$inject = injectParams;
  app.controller('MainCtrl', MainCtrl);
}())
