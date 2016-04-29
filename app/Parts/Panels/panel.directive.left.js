(function () {
  var app = angular.module('tinderClient');

  var infoPanel = function () {
    return {
      restrict : 'E',
      templateUrl : 'Parts/Panels/panel-50-left.html',
      transclude  : true
    }
  }

  app.directive('panelHalfLeft', infoPanel);
}())
