(function () {
  var app = angular.module('tinderClient');

  var UserCtrl = [
    'Auth',
    'Tinder',
    'UserService',
    '$location',

    function (Auth, Tinder, UserService, $location) {
      var vm = this;
      if(Auth.user) {
        vm.user = Auth.user;
      } else {
        $location.replace('/login');
      }

      
  }];

  app.controller('UserCtrl', UserCtrl);
}())
