(function(){
  var app = angular.module('tinderClient');

  var injectParams = ['$http'];

  var TinderService = function($http) {

    this.setToken = function(token) {
      return $http.post('/api/start', {token : token});
    }

    this.getRecs = function() {
      return $http.get('/api/recs');
    }

    this.likeOne = function(id) {
      return $http.post('/api/like', {id : id});
    }

    this.likeAll = function(users) {
      return $http.post('/api/like/all', {users : users});
    }

    return this;
  }

  TinderService.$inject = injectParams;

  app.service('Tinder', TinderService);
}())
