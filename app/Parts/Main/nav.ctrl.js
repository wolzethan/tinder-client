(function () {
  var app = angular.module('tinderClient');

  var NavCtrl = [
    'Tinder',
    'UserService',
    'Auth',
    '$scope',

    function(Tinder, UserService, Auth, $scope) {
      var vm = this;
      vm.loggedIn = false;

      $scope.$watch(angular.bind(this, function() {
        return Auth.loggedIn;
      }), function(newVal) {
        if(newVal === true) {
          vm.loggedIn = true;
        }
      });

    }];

  app.controller('NavCtrl', NavCtrl);
}())
