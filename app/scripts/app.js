(function(){
    var app = angular.module('tinderClient', [
      'ui.router',
      'ngTinder'
    ]);

    app.config(function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/home');

        $stateProvider
          .state('home', {
            url : "/home",
            templateUrl : "views/pages/home.html"
          })
          .state('dashboard', {
            url : "/dashboard",
            templateUrl : "views/partials/dashboard.html",
            controller  : "TinderCtrl"
          })
          .state('login', {
            url : "/login",
            templateUrl : "views/partials/auth/login.html",
          })
          .state('signup', {
            url : "/signup",
            templateUrl : "views/partials/auth/signup.html"
          });
    });

}())
