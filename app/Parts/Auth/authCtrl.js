(function () {
  var app = angular.module('tinderClient');

  var AuthCtrl = [
    'Auth',
    '$location',

    function(Auth, $location) {
      var vm = this;
      vm.notLoggedIn = false;

      function init() {
        Auth.isLoggedIn()
            .success(function(data) {
              $location.path('/dashboard');
            })
            .error(function() {
              vm.notLoggedIn = true;
            })
      }

      init();

      vm.login = function() {
        Auth.login(vm.username, vm.password)
            .then(function() {
              $location.path('/dashboard');
            });
      }

      vm.signup = function() {
        Auth.signup(vm.username, vm.password)
            .then(function() {
              $location.path('/dashboard');
            });
      }

    }];

    app.controller('AuthCtrl', AuthCtrl);
}());
