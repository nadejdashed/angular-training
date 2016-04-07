(function(module) {

    var mainController = function ($scope) {
        var vm = this;
        vm.editMode = false;

        vm.changeView = function(){
          vm.editMode = !vm.editMode;
        }
    };

    module.controller("mainController", mainController);

}(angular.module("app")));