(function(module) {

    var addCatController = function ($scope, $http, catCrudService) {
      $scope.catImageUrl = 'http://cdn.syn-ch.com/src/139/61/34/1396134288710.jpeg';
      $scope.onSave = function(form) {
        $http.post('/cat', {
            name: form.name.$modelValue,
            src: form.imgUrl.$modelValue
        });
      }
    };

    module.controller("addCatController", addCatController);

}(angular.module("app")));
