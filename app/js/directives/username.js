(function (module) {

  var username = function ($http, $q, $compile, $timeout) {
    var processResponse = function (response) {
      if (response.data) {
        return $q.when(true);
      }
      else {
        return $q.reject(false);
      }
    };

    var validateUsername = function (value) {
      var deferred = $q.defer();
      $timeout(function () {
        deferred.resolve({data: {}});
      }, 3000);
      return deferred.promise.then(processResponse);

      //return $http.get("/api/namevalidation?name=" + encodeURI(value))
      //  .then(processResponse);
    };

    var setupDom = function (input, form, scope) {
      var inputName = input.attr("name");
      var formName = form.$name;
      var pending = "<div ng-if='" + formName + "." + inputName + ".$pending'>Checking name...</div>";
      input.parent().append($compile(pending)(scope));
    };

    return {
      restrict: "A",
      require: ["ngModel", "^form"],
      link: function (scope, element, attributes, controllers) {
        var ngModel = controllers[0];
        var ngForm = controllers[1];

        ngModel.$asyncValidators.username = validateUsername;

        setupDom(element, ngForm, scope);
      }
    }
  };

  module.directive("username", username);

}(angular.module("forms")));
