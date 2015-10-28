describe("add cat controller", function () {
    var sut, catService, userService, cookies, getUserSpy;

    angular.module("alertsModule", []);
    beforeEach(angular.mock.module("app"));

    beforeEach(function () {
        catService = {
            saveCat: jasmine.createSpy('saveCat')
        };
    });

    beforeEach(angular.mock.module('app', function($provide){
        $provide.value('userService', {
            getActiveUser: function(){}
        });
    }));

    beforeEach(inject(function ($controller, $rootScope, $injector) {
        sut = $rootScope.$new();
        userService = $injector.get('userService');
        getUserSpy = spyOn(userService, 'getActiveUser');
        cookies = $injector.get('$cookies');
        $controller("addCatController", {
            $scope: sut,
            catService: catService,
            userService: userService
        });
    }));

    describe('When you use method save from $scope', function() {
        it("add cat", function () {
            sut.catName = 'Tom';
            sut.catUrl = 'http://';
            var cat = {"name": sut.catName, "url": sut.catUrl};
            sut.saveCat();
            expect(catService.saveCat).toHaveBeenCalledWith(cat);
        });
    });

    it('should watcher update', function(){
        expect(sut.activeUserLogin).toEqual(undefined);
        sut.$apply();
        userService.getActiveUser.and.returnValue({login: 'user'});
        sut.$apply();
        expect(sut.activeUserLogin).toEqual('user');
    });
});