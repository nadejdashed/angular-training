(function(module) {
    "use strict";

    var menuController = function ($scope, authService, permissionsService, $location) {

      $scope.isActive = function(stateName) {
        return (stateName === $location.path());
    	};

    	$scope.logout = function($e) {
    		$e.preventDefault();
    		authService.logout();
    	};

    	$scope.$watch(authService.getUser, function(val) {
    		$scope.canAdd = permissionsService.canAddPermission();
    		$scope.isLoged = !!val;
    	});

    };

    module.controller("menuController", menuController);

}(angular.module("app")));
