angular.module("app").controller("modalMessageController",
    function ($scope, $uibModalInstance, $sce, titleContent, bodyContent, buttonsNames, data) {
        $scope.titleContent = $sce.trustAsHtml(titleContent);
        $scope.bodyContent = $sce.trustAsHtml(bodyContent);
        $scope.buttonsNames = buttonsNames;

        $scope.ok = function () {
            $uibModalInstance.close(data);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }
);