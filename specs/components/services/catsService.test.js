describe('catsServiceTest', function () {

    var catsService,
        $httpBackend,
        returnedData,
        newUpdatedData,
        dataAfterDeleting,
        dataAfterAdding,
        catForDeleting,
        $rootScope;


    beforeEach(module('app'));

    beforeEach(inject(function($injector){
        catsService = $injector.get('catsService');
        $httpBackend = $injector.get('$httpBackend');

        $rootScope = $injector.get('$rootScope');

        returnedData = [
            {
                "id": 1,
                "name": "Alex family",
                "src": "http://25.media.tumblr.com/tumblr_lncvc9SMfW1qbe5pxo1_500.jpg",
                "vote": 0
            },
            {
                "id": 2,
                "name": "Viktor",
                "src": "http://24.media.tumblr.com/tumblr_lsrk9vhVai1qzopnho1_1280.jpg",
                "vote": 3
            },
            {
                "id": 3,
                "name": "Albert",
                "src": "http://24.media.tumblr.com/tumblr_m4jgfkIsWU1qjev1to1_500.jpg",
                "vote": 0
            },
            {
                "id": 4,
                "name": "Lia",
                "src": "http://24.media.tumblr.com/tumblr_m9u8u7DV4h1qh66wqo1_500.jpg",
                "vote": 5
            }
        ];

        // Getting of all cats
        $httpBackend.whenGET('/cats').respond(returnedData);

        // Getting of cat by ID
        $httpBackend.whenGET('/cats/2').respond(returnedData[2]);

        // Updating
        newUpdatedData = returnedData.slice();

        var cat = newUpdatedData[1];
        cat.name = "Victor Smile";
        cat.vote = 4;

        $httpBackend.whenPUT('/cats/2', cat).respond(newUpdatedData);

        // Deleting
        dataAfterDeleting = returnedData.slice();
        catForDeleting = returnedData[3];
        dataAfterDeleting.pop();

        $httpBackend.whenDELETE('/cats/4', catForDeleting).respond(catForDeleting);

        // Saving
        dataAfterAdding = dataAfterDeleting.slice();
        dataAfterAdding.push(catForDeleting);

        $httpBackend.whenPOST('/cats', catForDeleting).respond(dataAfterAdding);

        console.log(catForDeleting);
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('Should get cats!', function(){

        $httpBackend.expectGET('/cats');

        catsService.getCats().then(function (data) {
            expect(data).toEqual(returnedData);

            var isValid = catsService.getValid()
            expect(isValid).toEqual(true);
        });

        $httpBackend.flush();
    });

    it('Should get cat by id!', function(){

        $httpBackend.expectGET('/cats/2');

        catsService.getCatById(2).then(function (data) {
            expect(data).toEqual(returnedData[2]);
        });

        $httpBackend.flush();
    });

    it('Should update cat!', function(){

        var cat = returnedData[1];
        cat.name = "Victor Smile";
        cat.vote = 4;

        $httpBackend.expectPUT('/cats/2', cat);

        catsService.updateCat(cat).then(function (data) {
            expect(data).toEqual(newUpdatedData);

            var isValid = catsService.getValid()
            expect(isValid).toEqual(false);
        });

        $httpBackend.flush();
    });

    it('Should remove cat!', function(){

        console.log(catForDeleting);

        $httpBackend.expectDELETE('/cats/4', catForDeleting);

        catsService.deleteSelectedCat(catForDeleting).then(function (data) {
            expect(data).toEqual(catForDeleting);

            var isValid = catsService.getValid()
            expect(isValid).toEqual(false);
        });

        $httpBackend.flush();
    });

    it('Should add removed cat!', function(){

        $httpBackend.expectPOST('/cats', catForDeleting);

        catsService.saveCat(catForDeleting).then(function (response) {
            expect(response.data).toEqual(dataAfterAdding);

            var isValid = catsService.getValid()
            expect(isValid).toEqual(false);
        });

        $httpBackend.flush();
    });

});