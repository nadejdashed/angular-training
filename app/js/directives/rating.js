(function (module) {

  var ratingController = function ($scope) {

    var ngModel;

    this.init = function (min, max, ngModelController) {
      ngModel = ngModelController;
      ngModel.$render = this.render;
      $scope.stars = new Array(max - min + 1);
    };

    this.render = function () {
      $scope.value = ngModel.$viewValue;
    };

    $scope.mouseover = function ($index) {
      $scope.preview = $index;
    };

    $scope.mouseout = function () {
      $scope.preview = -1;
    };

    $scope.click = function ($index) {
      ngModel.$setViewValue($index + 1);
      ngModel.$setTouched();
      ngModel.$render();
    };

    $scope.styles = function ($index) {
      return {
        "glyphicon": true,
        "glyphicon-star": $index < $scope.value,
        "glyphicon-star-empty": $index >= $scope.value,
        "starpreview": $index <= $scope.preview
      };
    };
  };

  var rating = function () {
    return {
      require: ["rating", "ngModel"],
      scope: {},
      templateUrl: "templates/rating.html",
      controller: "ratingController",
      link: function (scope, element, attributes, controllers) {
        var ratingController = controllers[0];
        var ngModelController = controllers[1];

        var min = parseInt(attributes.min || "1");
        var max = parseInt(attributes.max || "10");
        ratingController.init(min, max, ngModelController);
      }
    };
  };

  module.controller("ratingController", ratingController);
  module.directive("rating", rating);

}(angular.module("forms")));
