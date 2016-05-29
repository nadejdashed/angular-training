(function(module) {

    var addCatController = function ($scope, $http, catCrudService) {
      $scope.catImageUrl = 'http://cdn.syn-ch.com/src/139/61/34/1396134288710.jpeg';
      $scope.onSave = function(form) {
        // TODO use catCrudService to save cat
        $http.post('/cat', {
            // TODO take variables from model (not from form)
            name: form.name.$modelValue,
            src: form.imgUrl.$modelValue
        });
      }
    };

    module.controller("addCatController", addCatController);

}(angular.module("app")));
