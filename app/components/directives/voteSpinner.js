
var myModule = angular.module('app');

    // TODO First time I see such definition of the directive. It's not suitable to read. 
    // Better return {
    //     scope: ....,
    //     restrict: ... 
    // }
    myModule.directive('voteSpinner', function() {
        var directive = {};

		directive.scope = {
      // TODO make directive more universal, rename selectedCat variable to item name or remove it at all if it's not necessary    
			selectedCat: '=',
            votes: '=',
            voteUp: '&',
            voteDown: '&'
		};


        directive.restrict = 'E'; 

        directive.templateUrl = "app/components/directives/vote-spinner.html";

        return directive;
    })