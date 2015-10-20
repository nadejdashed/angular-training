(function(module) {
  "use strict";
  //usersStorageService
  module.factory('permissionsService', function($q, $http, usersStorageService) {

    var checkPermissions = function() {
      var user = usersStorageService.getLoginUser();
      if (user) {
        if (user.id === 1) {
          user.role = 'admin';
        } else {
          user.role = 'loged';
        }
      }
      return user;
    };

    var canEditPermission = function(language) {
      var user = checkPermissions();//usersStorageService.getLoginUser();
      var canEdit = false;
      if (user) {
        if (user.login === language.owner) {
          canEdit = true;
        } else if (user.role === 'admin') {
          canEdit = true;
        }
      }
      return canEdit;
    };

    return {
      //checkPermissions: checkPermissions,
      canEditPermission: canEditPermission
    };
  });

  }(angular.module("app")));
