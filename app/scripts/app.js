(function(){
    var app = angular.module('babyCerebro', [
      'ui.router'
    ]);

    app.config(function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/home');

        $stateProvider
          .state('home', {
            url : "/home",
            templateUrl : "views/partials/home.html",
            controller  : "MainCtrl"
          });
    });

}())
