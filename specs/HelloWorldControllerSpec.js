describe("hello world controller", function () {
    var sut, mockHelloWorldService, user, mockWindow;

    beforeEach(function () {
        module("app");
        user = {id: 0};

        mockWindow = {
            alert: jasmine.createSpy()
        };

        mockHelloWorldService = {
            getAllUsers: jasmine.createSpy()
        };
    });

    beforeEach(inject(function ($controller, $rootScope) {
        sut = $rootScope.$new();
        $controller("HelloWorldController", {
            $scope: sut,
            $window: mockWindow,
            HelloWorldService: mockHelloWorldService
        });
    }));

    it("will obtain data about users from service", function () {
        expect(mockHelloWorldService.getAllUsers).toHaveBeenCalled();
    });

    it("will show user id", function () {
        sut.showUserId(user);
        expect(mockWindow.alert).toHaveBeenCalledWith(user.id);
    });
});
