var RazorAppControllers = angular.module('RazorAppControllers', []);

RazorAppControllers.controller(
  "MainIndexCtrl", ["$scope", "NodeList", "PolicyList", function($scope, NodeList, PolicyList){
		$scope.config		= config;
		$scope.nodes		= NodeList.query();
		$scope.policies = PolicyList.query();
  }]
);

RazorAppControllers.controller(
  "NodeListCtrl", ["$scope", "NodeList", function($scope, NodeList){
		$scope.config	= config;
		$scope.data = NodeList.query();
  }]
);

RazorAppControllers.controller(
  "NodeDetailCtrl", ["$scope", "$routeParams", "Node", "NodeLog",
  function($scope, $routeParams, Node, NodeLog){
		$scope.config	= config;
    $scope.nodeId = $routeParams.nodeId; 

		$scope.node = Node.get({nodeId: $routeParams.nodeId});
		$scope.log  = NodeLog.get({nodeId: $routeParams.nodeId});
  }]
);

RazorAppControllers.controller(
  "PolicyListCtrl", ["$scope", "PolicyList", function($scope, PolicyList){
		$scope.config		= config;
		$scope.data = PolicyList.query();
  }]
);

RazorAppControllers.controller(
  "PolicyDetailCtrl", ["$scope", "$routeParams", "Policy",
  function($scope, $routeParams, Policy){
		$scope.config		= config;
    $scope.policyId = $routeParams.policyId; 

		$scope.policy = Policy.get({policyId: $routeParams.policyId});
  }]
);
