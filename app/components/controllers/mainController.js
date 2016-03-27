(function(module) {

	function Cat(name, imgsrc) {
		this.name = name;
		this.imgsrc = imgsrc;
		this.viewed = false;
		this.clicks = 0;
		this.votes = 0;
	}

    var mainController = function ($scope) {
    	$scope.cats = [
    	    new Cat("Bonnie and Clyde", "/app/img/cat1-720.jpg"),
    	    new Cat("Indiana Jones", "/app/img/cat2-720.jpg"),
    	    new Cat("Batman", "/app/img/cat3-720.jpg"),
    	    new Cat("Cristmas Elfs", "/app/img/cat4-720.jpg"),
    	    new Cat("Fluffy Cat", "/app/img/cat5-720.jpg")
    	];
    	$scope.selectCat = function(cat) {
    		cat.viewed = true;
    		$scope.selectedCat = cat;
    	};
    	$scope.reverse = '1';
        $scope.positiveVotes = 0;
        // $scope.$watch(
        //     "cats",
        //     function( newValue, oldValue ) {
        //         addLogItem( $scope.watchLog );
        //     }
        // );
        $scope.action = 'view';
        $scope.newCat = new Cat();
    };

    module.controller("mainController", mainController);

}(angular.module("app")));