(function(module) {
  "use strict";
  //usersStorageService;
  module.factory('dataService', function($q, $http) {

    var languageProperties = ['id', 'name', 'catImg', 'clicks', 'likes', 'dataAdd', 'owner'];

    var prepareLanguage = function(lang) {
      var language = {};
      for (var i = 0; i < languageProperties.length; i++) {
        language[languageProperties[i]] = lang[languageProperties[i]];
      }
      return language;
    };

    var dataLanguages = {

      getLanguages: function() {
        var deferred = $q.defer();
        $http.get('/languages').success(function(data) {
          deferred.resolve(data);
        }).error(function(data) {
          deferred.reject("error");
        });
        return deferred.promise;
      },

      getLanguage: function(id) {
        var deferred = $q.defer();
        $http.get('/languages/'+ id).success(function(data) {
          deferred.resolve(data);
        }).error(function(data) {
          deferred.reject("error");
        });
        return deferred.promise;
      },

      addLanguage: function(lang) {
        var deferred = $q.defer();
        var language = prepareLanguage(lang);

        // var owner = usersStorageService.getLoginUser().login;
        // if (owner) {
        //   language.owner = owner;
        // }

        $http.post('/languages', language).success(function(data) {
          deferred.resolve(data);
        }).error(function(data) {
          deferred.reject("error");
        });
        return deferred.promise;
      },

      changeLanguage: function(lang) {
        var deferred = $q.defer();
        var language = prepareLanguage(lang);

        $http.put('/languages/'+ language.id, language).success(function(data) {
          deferred.resolve(data);
        }).error(function(data) {
          deferred.reject("error");
        });
        return deferred.promise;
      },

      deleteLanguage: function(lang) {
        var deferred = $q.defer();
        $http.delete('/languages/'+ lang.id).success(function(data) {
          deferred.resolve(data);
        }).error(function(data) {
          deferred.reject("error");
        });
        return deferred.promise;
      }

    };
    return dataLanguages;
  });

}(angular.module("app")));
