(function(module) {
    "use strict";

    module.directive("expander", expanderDirective);

    function expanderDirective() {
    	return {
    		restrict: 'E',
    		transclude: true,
    		templateUrl: "/app/components/directives/expanderDirective.tmpl.html",
    		controller: Controller,
    		controllerAs: "ctrl"
    	};

    	function Controller() {
    		var vm = this;

    		vm.contentVisible = false;
    		vm.toggleContent = toggleContent;

    		function toggleContent() {
    			vm.contentVisible = !vm.contentVisible;
    		}
    	}
    }

} (angular.module("app")));