// public/core.js
var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
    
    $scope.productIdInput = "";
    $scope.productDetails = "";

    // $http.get('/productId')
    // .success(function(data){
    //     console.log("abc");
    // });

    $scope.fetchProductDetails = function(){
        $http.post('/api/productId')
            .success(function(data){
                $scope.productDetails = data;
                console.log(data);
                console.log("hey");
            });
    };
}