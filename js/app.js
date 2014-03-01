var RazorApp = angular.module("RazorApp", [
  'ngRoute',
  'RazorAppControllers'
]);

RazorApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/nodes', {
        templateUrl: 'partials/node-list.html',
        controller: 'NodeListCtrl'
      }).
      when('/nodes/:nodeId', {
        templateUrl: 'partials/node-detail.html',
        controller: 'NodeDetailCtrl'
      }).
      otherwise({
        redirectTo: '/nodes'
      });
  }
]);

