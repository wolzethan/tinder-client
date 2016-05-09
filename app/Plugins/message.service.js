(function() {
  var app = angular.module('ngTinder', []);

  var messageModal = function() {
    return {
      restrict : 'E',
      scope : {
        show : '=',
        options : '=',
        user  : '=',
        send : '&'
      },
      replace : true,
      templateUrl : 'views/partials/message-modal.html',
      link : function (scope, element, attrs) {
        scope.dialogStyle = {};
        if(attrs.width) {
          scope.dialogStyle.width = attrs.width;
        }
        if(attrs.height) {
          scope.dialogStyle.height = attrs.height;
        }
        scope.hideModal = function () {
          scope.show = false;
        }
        scope.sendMessage = function(id) {
          scope.send()(id, scope.message);

          return scope.message = "";
        }
      }
    }
  }

  app.directive('messageModal', messageModal);

}())
