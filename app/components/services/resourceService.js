(function(module) {
  "use strict";

  module.factory('resourceService', function($q, $http, $resource) {

    var Language = $resource('/languages/:id', {id: '@id'}, {
  		update: {method:'PUT', isArray:true}
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
        var deferred = $q.defer();
        $http.get('/languages').success(function(data) {
          deferred.resolve(data);
        }).error(function(data) {
          deferred.reject("error");
        });
        return deferred.promise;
        //return Language.query().$promise;
      },

      getLanguage: function(id) {
        var deferred = $q.defer();
        $http.get('/languages/'+ id).success(function(data) {
          deferred.resolve(data);
        }).error(function(data) {
          deferred.reject("error");
        });
        return deferred.promise;
        //return Language.get({id: id}).$promise;
      },

      addLanguage: function(lang) {
        var language = prepareLanguage(lang);

        var deferred = $q.defer();

        $http.post('/languages', language).success(function(data) {
          deferred.resolve(data);
        }).error(function(data) {
          deferred.reject("error");
        });
        return deferred.promise;
        //return language.$save().$promise;
        //expect(language instanceof Language).toEqual(true);
        //return language.$save().$promise;

    		//return Language.save(language).$promise;
      },

      changeLanguage: function(lang) {
        var language = prepareLanguage(lang);

        var deferred = $q.defer();

        $http.put('/languages/'+ language.id, language).success(function(data) {
          deferred.resolve(data);
        }).error(function(data) {
          deferred.reject("error");
        });
        return deferred.promise;

        //return language.$update().$promise;
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
        var deferred = $q.defer();
        $http.delete('/languages/'+ lang.id).success(function(data) {
          deferred.resolve(data);
        }).error(function(data) {
          deferred.reject("error");
        });
        return deferred.promise;

		    //return lang.$remove().$promise;
      }

    };
    return dataLanguages;
  });

}(angular.module("app")));
