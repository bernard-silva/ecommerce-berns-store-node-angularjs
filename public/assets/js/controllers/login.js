const app = angular.module('ecommerce-app', [])
app.controller('LoginController', ($scope, $http) => {
    $scope.email = ""
    $scope.password = ""
    $scope.loading = false;
    $scope.loginError = false;

    $scope.handleSubmit = () => {
        $scope.loading = true;

        $http.post('http://localhost:3333/api/session', {
            email: $scope.email,
            password: $scope.password,
        }).then((response) => {
            localStorage.setItem('token', response.data.token)
            $scope.loading = false;
            location.href = "/"
        }, () => {
            $scope.loading = false;
            $scope.loginError = true;
        })
    }

    $scope.verifyLogin = () => {
        const token = localStorage.getItem('token')

        if (token) {
            location.href = "/"
        }
    }

    $scope.verifyLogin()
})