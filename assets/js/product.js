var myApp = angular.module('myApp', []);
myApp.controller('productController', function($scope, $http){
    const url = "https://63f0d84cff1b45a1a442a0d7.mockapi.io/PH24685/RuouVang";
    $scope.searchText = ""; // Từ khóa tìm kiếm
    $scope.filterPR = "";
    $scope.currentPage = 1;
    $scope.pageSize = 6;
    $scope.products = [];
    $http.get("https://63f0d84cff1b45a1a442a0d7.mockapi.io/PH24685/RuouVang").then(function(response){
      $scope.products = response.data;
    });
   
    $scope.filterProduct = function(searchText) {
        $http.get(url + "?name=" + searchText).then(function(response) {
            $scope.products = response.data;
            $scope.currentPage = 1;
        });
    };
        fetch('https://63f0d84cff1b45a1a442a0d7.mockapi.io/PH24685/RuouVang')
        .then(response => response.json())
        .then(data => {
            $scope.count = data.length;
            
        })
        .catch(error => console.error(error));
    
    // Tính tổng số trang
    $scope.totalPage = function() {
        return Math.ceil($scope.count / $scope.pageSize);
    };
    
    // Tính vị trí bắt đầu của trang hiện tại
    $scope.productStartIndex = function() {
        return ($scope.currentPage - 1) * $scope.pageSize;
    };
    
    // Tạo một mảng số trang để hiển thị
    $scope.displayPageRange = function() {
        var start = Math.max($scope.currentPage - 2, 1);
        var end = Math.min($scope.currentPage + 2, $scope.totalPage());
        var range = [];
        for (var i = start; i <= end; i++) {
        range.push(i);
        }
    return range;
};
    
    // Điều khiển phân trang
    $scope.setPage = function(page) {
        $scope.currentPage = page;
    };
    
    $scope.nextPage = function() {
        if ($scope.currentPage < $scope.totalPage()) {
            $scope.currentPage++;
        }
    };
    
    $scope.prevPage = function() {
        if ($scope.currentPage > 1) {
            $scope.currentPage--;
        }
    };
});

