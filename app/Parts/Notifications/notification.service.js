(function() {
  var app = angular.module('tinderClient');

  var NotificationFactory = function() {
    this.showError = function(err) {
      return alert(err);
    }

    this.showLoginMessage = function () {
      return alert('Username or Password incorrect');
    }

    this.showSignupMessage = function() {
      return alert('Username already taken!');
    }

    return this;
   }

  app.service('NotificationFactory', NotificationFactory);
}())
