(function () {
  var app = angular.module('tinderClient');

  var infoPanel = function () {
    return {
      restrict : 'E',
      templateUrl : 'Parts/Panels/panel-middle.html',
      transclude  : true
    }
  }

  app.directive('panelMiddle', infoPanel);
}())
