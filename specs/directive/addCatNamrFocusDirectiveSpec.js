describe("add cat name focus directive", function () {
    var sut, elem;

    angular.module("alertsModule", []);
    beforeEach(angular.mock.module("app"));

    beforeEach(inject(function ($rootScope, $compile) {
        sut = $rootScope.$new();
        elem = angular.element('<input focus-input type="text"  name="textfield">');
        spyOn(elem[0],'focus');
        $compile(elem)(sut);
    }));

    it('should set the focus', function () {
        expect(elem[0].focus).toHaveBeenCalled();
    })
});