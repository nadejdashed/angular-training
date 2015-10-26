describe("add cat controller", function () {
    var sut, catService, userService, cookies, getUserSpy;

    angular.module("alertsModule", []);
    beforeEach(angular.mock.module("app"));

    beforeEach(function () {
        catService = {
            saveCat: jasmine.createSpy('saveCat')
        };
        userService = {
            getActiveUser: jasmine.createSpy('getActiveUser')
        };
    });

    //beforeEach(angular.mock.module('app', function($provide){
    //    $provide.value('userService', {
    //        getActiveUser: function(){}
    //    });
    //}));

    beforeEach(inject(function ($controller, $rootScope, $injector) {

        sut = $rootScope.$new();
        userService = $injector.get('userService');
        cookies = $injector.get('$cookies');
        $controller("addCatController", {
            $scope: sut,
            catService: catService,
            userService: userService
        });
    }));

    //it('should watcher update', function(){
    //
    //    sut.$apply();
    //    expect(userService.getActiveUser).toEqual(undefined);
    //    //userService.and.returnValue({ name: 'test' });
    //    sut.$apply();
    //    //expect($scope.canAdd).toEqual({ name: 'test' });
    //    //expect($scope.isAuthenticated).toEqual(true);
    //
    //});


    describe('When you use method save from $scope', function() {
        it("add cat", function () {
            sut.catName = 'Tom';
            sut.catUrl = 'http://';
            var cat = {"name": sut.catName, "url": sut.catUrl};
            sut.saveCat();
            expect(catService.saveCat).toHaveBeenCalledWith(cat);
        });
    });
});




//describe('mainControllerTest', function(){
//    var $scope, getUserSpy;
//
//    beforeEach(module('eventApp', function($provide){
//        $provide.value('authService', {
//            getUser: function(){}
//        });
//    }));
//
//    beforeEach(inject(function($controller, $rootScope, authService, permissionService, $injector){
//        getUserSpy = spyOn(authService, 'getUser');
//        permissionService = $injector.get('permissionService');
//        spyOn(permissionService, 'checkAddPermission').and.returnValue(null);
//
//        $scope = $rootScope.$new();
//        $controller('mainController', {
//            $scope: $scope,
//            $state: {}
//        });
//    }));
//
//    it('should watcher update', function(){
//
//        expect($scope.canAdd).toEqual(undefined);
//        expect($scope.isAuthenticated).toEqual(undefined);
//
//        $scope.$apply();
//        expect($scope.canAdd).toEqual(null);
//        expect($scope.isAuthenticated).toEqual(false);
//
//        permissionService.checkAddPermission.and.returnValue({ name: 'test' });
//        getUserSpy.and.returnValue({ name: 'test' });
//        $scope.$apply();
//        expect($scope.canAdd).toEqual({ name: 'test' });
//        expect($scope.isAuthenticated).toEqual(true);
//
//    });
//
//});