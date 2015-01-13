describe("hello world", function () {
    var sut, mockTimeout, sutScope, scope;

    beforeEach(function () {
        module("app");

        sut= "hello-world";
        mockTimeout = jasmine.createSpy();

        module(function ($provide) {
            $provide.value("$timeout", mockTimeout);
        });
    });

    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();
        scope.someUserName = "some user name";
        var elem = $compile("<div hello-world username='{{someUserName}}'>")(scope);
        sutScope = elem.isolateScope();
    }));

    it("will set correct value to the scope", function () {
        expect(sutScope.username).toBe(scope.someUserName);
    });

    it("will call timeout", function () {
        expect(mockTimeout).toHaveBeenCalledWith(jasmine.any(Function), 10000);
    });

    it("will change username", function () {
        mockTimeout.calls.first().args[0]();
        expect(sutScope.username).toBe('we forgot to ask you for your name...');
    });
});
