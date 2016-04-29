(function () {
  var app = angular.module('tinderClient');

  var AuthCtrl = [
    'Auth',
    '$location',

    function(Auth, $location) {
      var vm = this;
      vm.notLoggedIn = false;

      function init() {
        if(Auth.loggedIn) {
            return $location.path('/tool');
        }
        vm.notLoggedIn = true;
      }

      init();

      vm.login = function() {
        Auth.login(vm.username, vm.password)
            .then(function() {
              $location.path('/tool');
            });
      }

      vm.signup = function() {
        Auth.signup(vm.username, vm.password)
            .then(function() {
              $location.path('/tool');
            });
      }

    }];

    app.controller('AuthCtrl', AuthCtrl);
}());
