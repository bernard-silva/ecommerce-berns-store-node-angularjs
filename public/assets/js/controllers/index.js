app.controller('HomeController', ($scope, $http, AdminService, SessionService) => {
    $scope.products = []

    $scope.getProducts = () => {
        $http.get('http://localhost:3333/api/products').then((response) => {
            $scope.products = response.data;
        })
    }

    $scope.addToCart = (productId) => {
        if (!$scope.isAuthenticated) {
            location.href = '/login.html'
            return
        }

        $http.post('http://localhost:3333/api/carts', {
            productId
        }, {
            headers: {
                Authorization: `Bearer ${SessionService.getToken()}`
            }
        })
    }

    SessionService.verifyLogin(false)
    $scope.logout = SessionService.logout
    $scope.isAuthenticated = SessionService.isAuthenticated()
    $scope.isAdmin = AdminService.isAdmin();
    $scope.userName = SessionService.getUser().name
    $scope.getProducts()
    SessionService.createVerifyLoginInterval(() => {
        SessionService.verifyLogin(false)
        $scope.isAuthenticated = SessionService.isAuthenticated()
        $scope.isAdmin = AdminService.isAdmin();
        console.log("isAuthenticated", $scope.isAuthenticated)
        $scope.$apply()
    })
})