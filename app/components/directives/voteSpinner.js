(function(module) {

    module.directive("voteSpinner", function() {
      return {
          restrict: 'E',
          scope:{
          	value:'=',
            up:'&',
            down:'&',
            check:'&canVote'
          },
          templateUrl: '/app/templates/vote-spinner.html'
      }
    });

}(angular.module("app")));