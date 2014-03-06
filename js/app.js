var RazorApp = angular.module("RazorApp", [
  'ngRoute',
  'naturalSort',
  'RazorAppControllers',
  'RazorAppServices'
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
      otherwise({
        redirectTo: '/'
      });
  }
]);

