(function(module) {

  var ngEditLanguage = function () {
    return {
      restrict: 'EA',
      templateUrl: '/templates/edit-language.html',
      scope: {
        source: "="
      },
      controller: "editLanguageController"
    };
  };

  module.directive('ngEditLanguage', ngEditLanguage);

}(angular.module("app")));
