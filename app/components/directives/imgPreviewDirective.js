(function(module) {
  "use strict";

  var imgPreview = function () {
    return {
      restrict: 'EA',
      templateUrl: '/templates/img-preview.html',
      scope: {
        source: "="
      }
    };
  };

  module.directive('imgPreview', imgPreview);

}(angular.module("app")));
