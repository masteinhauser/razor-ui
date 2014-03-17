var RazorApp = angular.module("RazorApp", [
  'ngRoute',
  'naturalSort',
  'RazorAppControllers',
  'RazorAppServices',
  'RazorAppUtil'
]);

RazorApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/index.html',
        controller: 'MainIndexCtrl'
      }).
      when('/brokers', {
        templateUrl: 'partials/brokers/list.html',
        controller: 'BrokerListCtrl'
      }).
      when('/brokers/:brokerId', {
        templateUrl: 'partials/brokers/detail.html',
        controller: 'BrokerDetailCtrl'
      }).
      when('/nodes', {
        templateUrl: 'partials/nodes/list.html',
        controller: 'NodeListCtrl'
      }).
      when('/nodes/:nodeId', {
        templateUrl: 'partials/nodes/detail.html',
        controller: 'NodeDetailCtrl'
      }).
      when('/policies', {
        templateUrl: 'partials/policies/list.html',
        controller: 'PolicyListCtrl'
      }).
      when('/policies/:policyId', {
        templateUrl: 'partials/policies/detail.html',
        controller: 'PolicyDetailCtrl'
      }).
      when('/repos', {
        templateUrl: 'partials/repos/list.html',
        controller: 'RepoListCtrl'
      }).
      when('/repos/:repoId', {
        templateUrl: 'partials/repos/detail.html',
        controller: 'RepoDetailCtrl'
      }).
      when('/tags', {
        templateUrl: 'partials/tags/list.html',
        controller: 'TagListCtrl'
      }).
      when('/tags/:tagId', {
        templateUrl: 'partials/tags/detail.html',
        controller: 'TagDetailCtrl'
      }).
      when('/tasks', {
        templateUrl: 'partials/tasks/list.html',
        controller: 'TaskListCtrl'
      }).
      when('/tasks/:taskId', {
        templateUrl: 'partials/tasks/detail.html',
        controller: 'TaskDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);

