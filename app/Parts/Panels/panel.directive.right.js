(function () {
  var app = angular.module('tinderClient');

  var infoPanel = function () {
    return {
      restrict : 'E',
      templateUrl : 'Parts/Panels/panel-50-right.html',
      transclude  : true
    }
  }

  app.directive('panelHalfRight', infoPanel);
}())
