(function(module) {
    "use strict";

     module.directive("voteSpinner", voteSpinnerDirective);

     function voteSpinnerDirective() {
     	return {
     		restrict : "E",
     		scope: {
     			onVoteUp: "&",
     			onVoteDown: "&",
     			canVote: "=",
     			votes : "@"
     		},
     		templateUrl: "/app/components/directives/voteSpinner.tmpl.html"
     	}
     }

}(angular.module("app")));     