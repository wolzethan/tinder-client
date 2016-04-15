(function(){
    var app = angular.module('tinderClient', [
      'ui.router'
    ]);

    app.config(function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/home');

        $stateProvider
          .state('home', {
            url : "/home",
            templateUrl : "views/pages/home.html"
          })
          .state('tool', {
            url : "/tool",
            templateUrl : "views/partials/tool.html",
            controller  : "MainCtrl"
          })
          .state('login', {
            url : "/login",
            templateUrl : "views/partials/auth/login.html",
          })
          .state('signup', {
            url : "/signup",
            templateUrl : "views/partials/auth/signup.html",
          });
    });

}())
