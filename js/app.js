var RazorNodes  = angular.module("RazorNodes", []);
RazorNodes.controller(
  "MainCtrl", ["$scope", function($scope){
    $scope.message = "Enter a keyword.";
    
    $scope.search = function(){
      var query = encodeURIComponent($scope.keyword);
      //var reqURL = 'http://10.128.2.2:8080/api/collections/nodes/'+ query; 
      var reqURL = 'http://10.128.2.2:8080/api/collections/nodes'; 
    
      $http.get(reqURL).
        success(function(data, status){
	  var results = [];

	  for(var i = 0; i < data.items.length; i++){
	    results.push(data.items[i].name);
	  }

          $scope.results = results;
        }).
        error(function(data, status){
          $scope.results = [];
	  $scope.message = "There was an error.";
      });

    }
  }]
);

