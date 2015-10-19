(function(module) {

    var ngVote = function () {

      return {
        restrict: 'EA',
        scope: {
          lang: "="
        },
        templateUrl: '/templates/votes.html',
        controller: "votesController"
      };
    };

    module.directive('ngVote', ngVote);

}(angular.module("app")));
