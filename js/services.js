var RazorAppServices = angular.module('RazorAppServices', ['ngResource']);

RazorAppServices.factory('Broker', ['$resource',
  function($resource){
    return $resource(getRazorUrl('/api/collections/brokers'), {}, {
			list:     {method:'GET', url: getRazorUrl('/api/collections/brokers')},
			detail:   {method:'GET', url: getRazorUrl('/api/collections/brokers/:brokerId'), params:{brokerId:'noop'}},
			policies: {method:'GET', url: getRazorUrl('/api/collections/brokers/:brokerId/policies'), params:{brokerId:'noop'}}
    });
  }
]);

RazorAppServices.factory('Node', ['$resource',
  function($resource){
    return $resource(getRazorUrl('/api/collections/nodes'), {}, {
			list:   {method: 'GET', url: getRazorUrl('/api/collections/nodes')},
			detail: {method: 'GET', url: getRazorUrl('/api/collections/nodes/:nodeId'), params:{nodeId:'noop'}},
			log:    {method: 'GET', url: getRazorUrl('/api/collections/nodes/:nodeId/log'), params:{nodeId:'noop'}}
    });
  }
]);

RazorAppServices.factory('Policy', ['$resource',
  function($resource){
    return $resource(getRazorUrl('/api/collections/policies/'), {}, {
			list:   {method:'GET', url: getRazorUrl('/api/collections/policies')},
			detail: {method:'GET', url: getRazorUrl('/api/collections/policies/:policyId'), params:{policyId:'noop'}}
			nodes:  {method:'GET', url: getRazorUrl('/api/collections/policies/:policyId/nodes'), params:{policyId:'noop'}}
    });
  }
]);

RazorAppServices.factory('Repo', ['$resource',
  function($resource){
    return $resource(getRazorUrl('/api/collections/repos'), {}, {
			list:   {method:'GET', url: getRazorUrl('/api/collections/repos')},
			detail: {method:'GET', url: getRazorUrl('/api/collections/repos/:repoId'), params:{repoId:'noop'}}
    });
  }
]);

RazorAppServices.factory('Task', ['$resource',
  function($resource){
    return $resource(getRazorUrl('/api/collections/tasks'), {}, {
			list:   {method:'GET', url: getRazorUrl('/api/collections/tasks')},
			detail: {method:'GET', url: getRazorUrl('/api/collections/tasks/:taskId'), params:{taskId:'noop'}}
    });
  }
]);

RazorAppServices.factory('Tag', ['$resource',
  function($resource){
    return $resource(getRazorUrl('/api/collections/tags'), {}, {
			list:     {method:'GET', url: getRazorUrl('/api/collections/tags')},
			detail:   {method:'GET', url: getRazorUrl('/api/collections/tags/:tagId'), params:{tagId:'noop'}},
			nodes:    {method:'GET', url: getRazorUrl('/api/collections/tags/:tagId/nodes'), params:{tagId:'noop'}},
			policies: {method:'GET', url: getRazorUrl('/api/collections/tags/:tagId/policies'), params:{tagId:'noop'}}
    });
  }
]);
