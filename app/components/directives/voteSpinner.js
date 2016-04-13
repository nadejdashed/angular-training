
var myModule = angular.module('app');

    myModule.directive('voteSpinner', function() {
        var directive = {};

		directive.scope = {

			
			selectedCat: '=',
            votes: '=',
            voteUp: '&',
            voteDown: '&'
		};


        directive.restrict = 'E'; 

        directive.templateUrl = "app/components/directives/vote-spinner.html";

        return directive;
    })