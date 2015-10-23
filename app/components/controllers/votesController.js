(function(module) {
  "use strict";

  var votesController = function ($scope, $localStorage, authService) {

    $localStorage.$default({
      itemsLiked: []
    });

    var userId = authService.getUser();
    $scope.loged = authService.getToken();

    $scope.$watch( authService.getToken, function(loged) {
      $scope.loged = loged;
    });

    $scope.votes = function(item, param) {

      var myLikes = {
        userId: userId.id,
        itemId: item.id,
        param: param
      };

      var check = true;
      var canVote = true;
      var lang = {};
      for (var i = 0; i < $localStorage.itemsLiked.length; i++) {
        lang = $localStorage.itemsLiked[i];

        if (lang.userId === myLikes.userId && lang.itemId === myLikes.itemId) {
          if (lang.param === myLikes.param) {
            console.log("You cant vote agen !!");
            check = false;
            canVote = false;
            break;
          } else if (lang.param === 0) {
            $localStorage.itemsLiked[i].param = myLikes.param;
            check = false;
            console.log("You changed your vote !!");
            break;
          } else {
            $localStorage.itemsLiked[i].param = 0;
            check = false;
            console.log("You taked back your vote !!");
            break;
          }
        }

      }

      if (check) {
        $localStorage.itemsLiked.push(myLikes);
      }
      if (canVote) {
        console.log("Vote complited !");
        item.likes += param;
        $scope.saveVote();
      }

    };

  };

  module.controller("votesController", votesController);

}(angular.module("votes")));
