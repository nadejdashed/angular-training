angular.module("app").controller ('loginController', function ($scope, $state, authService){

    $scope.registrationData = {};
    $scope.loginData = {};

    $scope.registerNewUser = function (userData) {

        authService.registration(userData).then(function () {
            $scope.registrationData = {};
        });
    }

    $scope.cancelRegistration = function (userData) {
        $scope.registrationData = {};
    }

    $scope.loginUser = function (user) {

        authService.login(user).then(function (response) {

            if (response.data.status != "error") {

                $scope.loginData = {};

                var cat = userService.getCatForDelay();
                if (cat) {
                    catsService.updateCat(cat).then(function (data) {
                        $state.go('cats.preview', {id: cat.id});
                    });
                } else {
                    $state.go('cats');
                }

            } else {
                console.log("Is not valid credentials!");
            }

        });
    }

    $scope.cancelLogin = function (user) {
        $scope.loginData = {};
    }
});
