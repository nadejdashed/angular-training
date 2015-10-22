(function(module) {
  "use strict";

  module.factory('resourceService', function($q, $http, $resource) {

    var Language = $resource('/languages/:id', {id: '@id'}, {
  		update: {method:'PUT'}
  	});

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
        return Language.query().$promise;
      },

      getLanguage: function(id) {
        return Language.get({id: id}).$promise;
      },

      addLanguage: function(lang) {
        var language = prepareLanguage(lang);
    		return Language.save(language).$promise;
      },

      changeLanguage: function(lang) {
        return lang.$update();
      },

      changeLanguageLikes: function(lang) {
        var language = prepareLanguage(lang);

        var deferred = $q.defer();
        $http.put('/languages/'+ language.id + '/likes', language).success(function(data) {
          deferred.resolve(data);
        }).error(function(data) {
          deferred.reject("error");
        });
        return deferred.promise;
        //return language.$update().$promise;
      },

      deleteLanguage: function(lang) {
        return lang.$remove();
      }

    };
    return dataLanguages;
  });

}(angular.module("app")));
