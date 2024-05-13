const app = angular.module('ecommerce-app', [])
app.controller('CreateAccountController', ($scope, $http) => {
    $scope.name = ""
    $scope.email = ""
    $scope.password = ""
    $scope.passwordConfirmation = ""
    $scope.loading = false;

    $scope.handleSubmit = () => {
        if ($scope.password !== $scope.passwordConfirmation) {
            return
        }

        $scope.loading = true;

        $http.post('http://localhost:3333/api/users', {
            name: $scope.name,
            email: $scope.email,
            password: $scope.password,
        }).then(() => {
            $scope.loading = false;
            location.href = "/login.html"
        }, () => {
            $scope.loading = false;
        })
    }
})