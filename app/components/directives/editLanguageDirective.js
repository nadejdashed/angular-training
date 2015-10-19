(function(module) {

  var ngEditLanguage = function () {
    return {
      restrict: 'EA',
      templateUrl: '/templates/edit-language.html',
      scope: {
        source: "="
      },
      controller: function($scope, dataService) {
        $scope.editLanguage = function(language) {
          var lang = {
            id: language.id,
            name: language.name,
            catImg: language.catImg
          };
          dataService.changeLanguage(lang).then(function(data) {
            // console.log(data);
          });
          language.editShow = false;
        };
      }

    };
  };

  module.directive('ngEditLanguage', ngEditLanguage);

}(angular.module("app")));
