angular.module('eventApp').controller('ModalDeleteCtrl', function ($scope, $modalInstance, item) {

	$scope.item = item;

	$scope.delete = function () {
		$modalInstance.close();
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
});