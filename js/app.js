var RazorNodes  = angular.module("RazorNodes", []);
RazorNodes.controller(
  "MainCtrl", ["$scope", function($scope){
    $scope.message = "Enter a keyword.";
    
    $scope.search = function(){
      $scope.results = ["One", "Two", "Three"];
    }
    
    $scope.search = function(){
      var query = encodeURIComponent($scope.keyword);
      var reqURL = 'http://10.128.2.2:8080/api/nodes'+ query; 
    
      $http.json(reqURL).then(function(data){
        // this is the success part
      }, function(){
        // this is the errors part
      });
    }
  }]
);

