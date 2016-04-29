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

      //Make sure user is logged in
      $scope.$watch(angular.bind(this, function() {
        return Auth.user;
      }),
      function (newVal) {
        if(newVal !== undefined) {
          console.log(newVal);
        }
      });

    }];

  app.controller('NavCtrl', NavCtrl);
}())
