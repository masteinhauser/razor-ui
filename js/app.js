var RazorApp = angular.module("RazorApp", [
  'ngRoute',
  'RazorAppControllers',
  'RazorAppServices'
]);

RazorApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/nodes', {
        templateUrl: 'partials/nodes/list.html',
        controller: 'NodeListCtrl'
      }).
      when('/nodes/:nodeId', {
        templateUrl: 'partials/nodes/detail.html',
        controller: 'NodeDetailCtrl'
      }).
      otherwise({
        redirectTo: '/nodes'
      });
  }
]);

