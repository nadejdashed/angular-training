(function(module) {
  "use strict";

  module.factory('permissionsService', function(authService) {

    var checkPermissions = function() {
      var user = authService.getUser();
      if (user) {
        if (user.id === 0) {
          user.role = 'admin';
        } else {
          user.role = 'loged';
        }
      }
      return user;
    };

    var canEditPermission = function(language) {
      //var user = checkPermissions();
      var user = authService.getUser();

      var canEdit = false;
      if (user && user.login === language.owner) {
          canEdit = true;
      }
      // else if (user && user.role === 'admin') {
      //   canEdit = true;
      // }

      return canEdit;
    };

    function canAddPermission() {
  		return !!authService.getUser();
  	}

    return {
      canEditPermission: canEditPermission,
      canAddPermission: canAddPermission
    };

  });

}(angular.module("app")));
