(function(module) {

    module.directive("voteSpinner", function() {
      return {
          restrict: 'E',
          scope:{
            // TODO send exactly value of vote. Directive doesn't use full cat
            // canVote never used
          	value:'=',
            up:'&',
            down:'&',
            check:'&canVote'
          },
          templateUrl: '/app/templates/vote-spinner.html'
      }
    });

}(angular.module("app")));