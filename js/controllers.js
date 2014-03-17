var RazorAppControllers = angular.module('RazorAppControllers', []);

RazorAppControllers.controller(
  "MainIndexCtrl", ["$scope", "Broker", "Node", "Policy", "Repo", "Task", "Tag", function($scope, Broker, Node, Policy, Repo, Task, Tag){
		$scope.config		= config;
		$scope.brokers  = Broker.list();
		$scope.nodes		= Node.list();
		$scope.policies = Policy.list();
		$scope.repos    = Repo.list();
		$scope.tags     = Tag.list();
		$scope.tasks    = Task.list();
  }]
);

RazorAppControllers.controller(
  "BrokerListCtrl", ["$scope", "Broker", function($scope, Broker){
		$scope.config		= config;
		$scope.data = Broker.list();
  }]
);

RazorAppControllers.controller(
  "BrokerDetailCtrl", ["$scope", "$routeParams", "Broker",
  function($scope, $routeParams, Broker){
		$scope.config		= config;
    $scope.brokerId = $routeParams.brokerId; 

		$scope.broker   = Broker.detail({brokerId: $routeParams.brokerId});
		$scope.policies = Broker.policies({brokerId: $routeParams.brokerId});
  }]
);

RazorAppControllers.controller(
  "NodeListCtrl", ["$scope", "Node", function($scope, Node){
		$scope.config	= config;
		$scope.data = Node.list();
  }]
);

RazorAppControllers.controller(
  "NodeDetailCtrl", ["$scope", "$routeParams", "Node", "Util",
  function($scope, $routeParams, Node, Util){
		$scope.config	= config;
		$scope.Util   = Util;

    $scope.nodeId = $routeParams.nodeId; 
		$scope.node = Node.detail({nodeId: $routeParams.nodeId});
		$scope.log  = Node.log({nodeId: $routeParams.nodeId});
  }]
);

RazorAppControllers.controller(
  "PolicyListCtrl", ["$scope", "Policy", function($scope, Policy){
		$scope.config		= config;
		$scope.data = Policy.list();
  }]
);

RazorAppControllers.controller(
  "PolicyDetailCtrl", ["$scope", "$routeParams", "Policy",
  function($scope, $routeParams, Policy){
		$scope.config		= config;
    $scope.policyId = $routeParams.policyId; 

		$scope.policy = Policy.detail({policyId: $routeParams.policyId});
		$scope.nodes  = Policy.nodes({policyId: $routeParams.policyId});
  }]
);

RazorAppControllers.controller(
  "RepoListCtrl", ["$scope", "Repo", function($scope, Repo){
		$scope.config		= config;
		$scope.data = Repo.list();
  }]
);

RazorAppControllers.controller(
  "RepoDetailCtrl", ["$scope", "$routeParams", "Repo",
  function($scope, $routeParams, Repo){
		$scope.config		= config;
    $scope.repoId = $routeParams.repoId; 

		$scope.repo = Repo.detail({repoId: $routeParams.repoId});
  }]
);

RazorAppControllers.controller(
  "TaskListCtrl", ["$scope", "Task", function($scope, Task){
		$scope.config		= config;
		$scope.data = Task.list();
  }]
);

RazorAppControllers.controller(
  "TaskDetailCtrl", ["$scope", "$routeParams", "Task",
  function($scope, $routeParams, Task){
		$scope.config		= config;
    $scope.taskId = $routeParams.taskId; 

		$scope.task = Task.detail({taskId: $routeParams.taskId});
  }]
);

RazorAppControllers.controller(
  "TagListCtrl", ["$scope", "Tag", function($scope, Tag){
		$scope.config		= config;
		$scope.data = Tag.list();
  }]
);

RazorAppControllers.controller(
  "TagDetailCtrl", ["$scope", "$routeParams", "Tag",
  function($scope, $routeParams, Tag){
		$scope.config		= config;
    $scope.tagId = $routeParams.tagId; 

		$scope.tag = Tag.detail({tagId: $routeParams.tagId});
		$scope.nodes = Tag.nodes({tagId: $routeParams.tagId});
		$scope.policies = Tag.policies({tagId: $routeParams.tagId});
  }]
);
