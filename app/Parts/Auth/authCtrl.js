(function () {
  var app = angular.module('tinderClient');

  var AuthCtrl = [
    'Auth',
    '$location',

    function(Auth, $location) {
      var vm = this;
      vm.notLoggedIn = false;

      function init() {
        Auth.checkUser()
            .then(function() {
              if(Auth.user !== null) {
                $location.path('/tool');
              } else {
                vm.notLoggedIn = true;
              }
            });
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
