describe("hello world service", function () {
    var sut;

    beforeEach(function () {
        module("app");
    });

    beforeEach(inject(function (HelloWorldService) {
        sut = HelloWorldService;
    }));

    it("will return users", function () {
        expect(sut.getAllUsers().length).toBe(10);
    });
});
