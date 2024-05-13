app.controller('AdminCreateProductController', ($scope, $http, SessionService, AdminService) => {
    $scope.name = '';
    $scope.price = 'R$ 0,00';
    $scope.description = '';
    $scope.imageURL = '';

    $scope.formatPrice = () => {
        const price = Number($scope.price.replace(/\D/g, '')).toString()
        const priceStr = price.padStart(3, '0')
        const priceArr = priceStr.split('')
        priceArr.splice(priceArr.length - 2, 0, ',')
        $scope.price = 'R$ ' + priceArr.join('')
    }

    $scope.handleSubmit = () => {
        $http.post('http://localhost:3333/api/products', {
            name: $scope.name,
            price: Number($scope.price.replace(/\D/g, '') / 100),
            description: $scope.description,
            imageUrl: $scope.imageUrl,
        }, {
            headers: {
                Authorization: `Bearer ${SessionService.getToken()}`
            }
        }).then(() => {
            location.href = '/admin.html'
        })
    }

    SessionService.verifyLogin()
    SessionService.createVerifyLoginInterval()
    $scope.userName = SessionService.getUser().name
    $scope.logout = SessionService.logout
})