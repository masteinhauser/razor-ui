var RazorAppControllers = angular.module('RazorAppControllers', []);

RazorAppControllers.controller(
  "MainIndexCtrl", ["$scope", "NodeList", "PolicyList", "BrokerList", "TaskList", "TagList", function($scope, NodeList, PolicyList, BrokerList, TaskList, TagList){
		$scope.config		= config;
		$scope.nodes		= NodeList.query();
		$scope.policies = PolicyList.query();
		$scope.brokers  = BrokerList.query();
		$scope.tasks    = TaskList.query();
		$scope.tags     = TagList.query();
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

RazorAppControllers.controller(
  "BrokerListCtrl", ["$scope", "BrokerList", function($scope, BrokerList){
		$scope.config		= config;
		$scope.data = BrokerList.query();
  }]
);

RazorAppControllers.controller(
  "BrokerDetailCtrl", ["$scope", "$routeParams", "Broker",
  function($scope, $routeParams, Broker){
		$scope.config		= config;
    $scope.brokerId = $routeParams.brokerId; 

		$scope.broker = Broker.get({brokerId: $routeParams.brokerId});
  }]
);

RazorAppControllers.controller(
  "TaskListCtrl", ["$scope", "TaskList", function($scope, TaskList){
		$scope.config		= config;
		$scope.data = TaskList.query();
  }]
);

RazorAppControllers.controller(
  "TaskDetailCtrl", ["$scope", "$routeParams", "Task",
  function($scope, $routeParams, Task){
		$scope.config		= config;
    $scope.taskId = $routeParams.taskId; 

		$scope.task = Task.get({taskId: $routeParams.taskId});
  }]
);

RazorAppControllers.controller(
  "TagListCtrl", ["$scope", "TagList", function($scope, TagList){
		$scope.config		= config;
		$scope.data = TagList.query();
  }]
);

RazorAppControllers.controller(
  "TagDetailCtrl", ["$scope", "$routeParams", "Tag",
  function($scope, $routeParams, Tag){
		$scope.config		= config;
    $scope.tagId = $routeParams.tagId; 

		$scope.tag = Tag.get({tagId: $routeParams.tagId});
  }]
);
