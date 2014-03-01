var RazorAppControllers = angular.module('RazorAppControllers', []);

RazorAppControllers.controller(
  "NodeListCtrl", ["$scope", "$http", function($scope, $http){
    var query = encodeURIComponent($scope.keyword);
    var reqURL = getRazorUrl('/api/collections/nodes'); 
  
    $http.get(reqURL).
      success(function(data, status){
        var nodes = [];
	$scope.data = data;

        for(var i = 0; i < data.items.length; i++){
          nodes.push(data.items[i].name);
        }

        $scope.nodes = nodes.sort();
      }).
      error(function(data, status){
	$scope.data = data;
        $scope.nodes = [];
        $scope.message = "There was an error.";
    });
  }]
);

RazorAppControllers.controller(
  "NodeDetailCtrl", ["$scope", "$routeParams", "$http",
  function($scope, $routeParams, $http){
    $scope.nodeId = $routeParams.nodeId; 

    var query = encodeURIComponent($scope.keyword);
    var reqURL = getRazorUrl('/api/collections/nodes/'+$routeParams.nodeId);
  
    $http.get(reqURL).
      success(function(data, status){
        $scope.node = data;
      }).
      error(function(data, status){
        $scope.results = [];
        $scope.message = "There was an error.";
    });
  }]
);
