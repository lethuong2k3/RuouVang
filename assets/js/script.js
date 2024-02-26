var app = angular.module('myApp', []);
    app.controller('ctrl', function($scope, $http) {
      $scope.products = [];
      $scope.producers = [];
      $scope.product = [];
      $http.get("https://63f0d84cff1b45a1a442a0d7.mockapi.io/PH24685/RuouVang").then(function(response) {
        $scope.products = response.data;
        $(document).ready(function() {
          $('.slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 3,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
          });
        });
      });
      $http.get("https://63f0d84cff1b45a1a442a0d7.mockapi.io/PH24685/NhaSanXuat").then(resp => {
        $scope.producers = resp.data;
      })
    });
    app.controller('ctrl-2', function($scope, $http){
      // Code js
      // lấy URL hiện tại
      var currentUrl = new URL(window.location.href);
      // lấy tất cả các tham số trong URL và lưu vào một đối tượng URLSearchParams
      var params = new URLSearchParams(currentUrl.search);
      // lấy giá trị của tham số product_id từ đối tượng params
      var productId = params.get('product_id');
      $http.get("https://63f0d84cff1b45a1a442a0d7.mockapi.io/PH24685/RuouVang" + "/" + productId).then(function(response){
        $scope.product = response.data;
      });
    });
    
    
    
    
    
    
    


