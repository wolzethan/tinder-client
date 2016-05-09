(function(){
  var app = angular.module('tinderClient');

  var injectParams = ['$http', 'UserService'];

  var TinderService = function($http, UserService) {

    var Tinder = this;

    this.setToken = function(token) {
      UserService.saveToken(token);
      return $http.post('/api/start', {token : token})
             .success(function(data) {
               Tinder.token = token;
           })
           .error(function(err) {
             alert("You need to provide an Access Token");
           })
    }

    this.getRecs = function() {
      return $http.get('/api/recs')
                  .success(function(res) {
                    Tinder.potentialMatches = res.data.results;
                  })
                  .error(function(err) {
                    swal({
                      title: "Dang!",
                      text: "No more recommendations try later...",
                      type: "error",
                      confirmButtonText: "Okay"
                    });
                  })
    }

    this.likeOne = function(id) {
      return $http.post('/api/like', {id : id})
                  .success(function(data) {
                    if(data.result.match) {
                      swal({
                        title: "Sweet!",
                        text: "You Matched!",
                        type: "success",
                        confirmButtonText: "Cool"
                      });
                    }
                    Tinder.results = data;
                  })
                  .error(function(err) {
                    swal({
                      title: "Error!",
                      text: err,
                      type: "error",
                      confirmButtonText: "Okay"
                    });
                  })
    }
    // TODO: Fix this function
    // this.likeAll = function(users) {
      // return $http.post('/api/like/all', {users : users});
    // }

    this.getHistory = function() {
      return $http.get('/api/history')
              .success(function(user) {
                Tinder.history = user.data;
              })
              .error(function(err) {
                swal({
                  title: "Error!",
                  text: err,
                  type: "error",
                  confirmButtonText: "Okay"
                });
              });
    }

    this.sendMessage = function(id, message) {
      return $http.post('/api/message/' + id, {message : message})
             .success(function(message) {
               Tinder.lastMessageResult = message.result;
             })
             .error(function(err) {
               alert(err);
             })
    }

    return this;
  }

  TinderService.$inject = injectParams;

  app.service('Tinder', TinderService);
}())
