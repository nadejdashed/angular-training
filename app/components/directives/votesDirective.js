(function(module) {
    "use strict";

    var ngVote = function () {

      return {
        restrict: 'EA',
        scope: {
          item: "=",
          saveVote: "&"
        },
        templateUrl: '/templates/votes.html',
        controller: "votesController"
      };
    };

    module.directive('ngVote', ngVote);

}(angular.module("votes")));
