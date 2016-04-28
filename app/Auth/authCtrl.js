(function () {
  var app = angular.module('tinderClient');

  var AuthCtrl = [
    'Auth',

    function(Auth) {
      var vm = this;

      vm.login = function() {
        Auth.login(vm.username, vm.password)
            .then(function() {
              console.log(Auth);
            });
      }

      vm.signup = function() {
        Auth.signup(vm.username, vm.password)
            .then(function() {
              console.log(Auth);
            });
      }

    }];

    app.controller('AuthCtrl', AuthCtrl);
}());
