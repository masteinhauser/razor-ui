var RazorAppControllers = angular.module('RazorAppControllers', []);

// I know this shouldn't be here, and I know I don't currently understand
// Angular enough to know where it should be, so...apologies.
function NavController($scope, $location){
  $scope.isActive = function(viewLocation) {
      return $location.path().indexOf(viewLocation) > -1;
  }
}

RazorAppControllers.controller(
  "MainIndexCtrl", ["$scope", "Util", "Broker", "Node", "Policy", "Repo", "Task", "Tag", function($scope, Util, Broker, Node, Policy, Repo, Task, Tag){
		$scope.config		= config;
		$scope.Util     = Util;
		$scope.brokers  = Broker.list();
		$scope.nodes		= Node.list();
		$scope.policies = Policy.list();
		$scope.repos    = Repo.list();
		$scope.tags     = Tag.list();
		$scope.tasks    = Task.list();
  }]
);

RazorAppControllers.controller(
  "BrokerListCtrl", ["$scope", "Util", "Broker", function($scope, Util, Broker){
		$scope.config	= config;
		$scope.Util   = Util;
		$scope.data   = Broker.list();
  }]
);

RazorAppControllers.controller(
  "BrokerDetailCtrl", ["$scope", "$routeParams", "Util", "Broker",
  function($scope, $routeParams, Util, Broker){
		$scope.config	  = config;
		$scope.Util     = Util;
    $scope.brokerId = $routeParams.brokerId; 

		$scope.broker   = Broker.detail({brokerId: $routeParams.brokerId});
		$scope.policies = Broker.policies({brokerId: $routeParams.brokerId});
  }]
);

RazorAppControllers.controller(
  "NodeListCtrl", ["$scope", "Util", "Node", function($scope, Util, Node){
		$scope.config	= config;
		$scope.Util   = Util;
		$scope.data   = Node.list();
  }]
);

RazorAppControllers.controller(
  "NodeDetailCtrl", ["$scope", "$routeParams", "Util", "Node",
  function($scope, $routeParams, Util, Node){
		$scope.config	= config;
		$scope.Util   = Util;

    $scope.nodeId = $routeParams.nodeId; 
		$scope.node   = Node.detail({nodeId: $routeParams.nodeId});
		$scope.log    = Node.log({nodeId: $routeParams.nodeId});
  }]
);

RazorAppControllers.controller(
  "PolicyListCtrl", ["$scope", "Util", "Policy", function($scope, Util, Policy){
		$scope.config	= config;
		$scope.Util   = Util;
		$scope.data   = Policy.list();
  }]
);

RazorAppControllers.controller(
  "PolicyDetailCtrl", ["$scope", "$routeParams", "Util", "Policy",
  function($scope, $routeParams, Util, Policy){
		$scope.config		= config;
		$scope.Util			= Util;
    $scope.policyId = $routeParams.policyId; 

		$scope.policy		= Policy.detail({policyId: $routeParams.policyId});
		$scope.nodes		= Policy.nodes({policyId: $routeParams.policyId});
  }]
);

RazorAppControllers.controller(
  "RepoListCtrl", ["$scope", "Util", "Repo", function($scope, Util, Repo){
		$scope.config	= config;
		$scope.Util   = Util;
		$scope.data		= Repo.list();
  }]
);

RazorAppControllers.controller(
  "RepoDetailCtrl", ["$scope", "$routeParams", "Util", "Repo",
  function($scope, $routeParams, Util, Repo){
		$scope.config	= config;
		$scope.Util   = Util;
    $scope.repoId = $routeParams.repoId; 

		$scope.repo		= Repo.detail({repoId: $routeParams.repoId});
  }]
);

RazorAppControllers.controller(
  "TaskListCtrl", ["$scope", "Util", "Task", function($scope, Util, Task){
		$scope.config	= config;
		$scope.Util   = Util;
		$scope.data		= Task.list();
  }]
);

RazorAppControllers.controller(
  "TaskDetailCtrl", ["$scope", "$routeParams", "Util", "Task",
  function($scope, $routeParams, Util, Task){
		$scope.config	= config;
		$scope.Util   = Util;
    $scope.taskId = $routeParams.taskId; 

		$scope.task		= Task.detail({taskId: $routeParams.taskId});
  }]
);

RazorAppControllers.controller(
  "TagListCtrl", ["$scope", "Util", "Tag", function($scope, Util, Tag){
		$scope.config	= config;
		$scope.Util   = Util;
		$scope.data		= Tag.list();
  }]
);

RazorAppControllers.controller(
  "TagDetailCtrl", ["$scope", "$routeParams", "Util", "Tag",
  function($scope, $routeParams, Util, Tag){
		$scope.config		= config;
		$scope.Util			= Util;
    $scope.tagId		= $routeParams.tagId; 

		$scope.tag			= Tag.detail({tagId: $routeParams.tagId});
		$scope.nodes		= Tag.nodes({tagId: $routeParams.tagId});
		$scope.policies = Tag.policies({tagId: $routeParams.tagId});
  }]
);
