var module = angular.module('app');

module.service('catService', function ($q, $filter, userService, $injector) {
    var resource = $injector.get('$resource');
    var Cats = resource('/cats/:id', {id: '@id'}, {
        update: {method: 'PUT'}
    });

    this.getCats = function () {
        return Cats.query();
    };

    this.getCatById = function (id) {
        return Cats.get({id: id});
    };

    this.editCat = function (cat) {
        cat.$update();
    };

    this.saveCat = function (cat) {
        var catObj = catObjCreate(cat.name, cat.url),
            promise;
        promise = Cats.save(catObj, function () {
        });
        return promise;
    };

    this.deleteCat = function (cat) {
        cat.$remove();
    };

    var catObjCreate = function (catName, catUrl) {
        var date = new Date();
        var user = userService.getActiveUser();

        var data = {
            'name': catName,
            'link': catUrl,
            'clickCount': 0,
            'view': 0,
            'addCatTime': $filter('date')(new Date(), 'dd-MMM-yyyy'),
            'creator': user && user.login
        };
        return data;
    };
});
