
var myModule = angular.module('app');

    myModule.directive('imagePreview', function() {
        var directive = {};

		directive.scope = {

			
			catImgUrl: '='
		};


        directive.restrict = 'E'; 

        directive.templateUrl = "app/components/directives/image-preview.html";

        return directive;
    })