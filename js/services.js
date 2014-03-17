var RazorAppServices = angular.module('RazorAppServices', ['ngResource']);

RazorAppServices.factory('Broker', ['$resource', 'Util',
  function($resource, Util){
    return $resource(Util.getRazorURL('/api/collections/brokers'), {}, {
			list:     {method:'GET', url: Util.getRazorURL('/api/collections/brokers')},
			detail:   {method:'GET', url: Util.getRazorURL('/api/collections/brokers/:brokerId'), params:{brokerId:'noop'}},
			policies: {method:'GET', url: Util.getRazorURL('/api/collections/brokers/:brokerId/policies'), params:{brokerId:'noop'}}
    });
  }
]);

RazorAppServices.factory('Node', ['$resource', 'Util',
  function($resource, Util){
    return $resource(Util.getRazorURL('/api/collections/nodes'), {}, {
			list:   {method: 'GET', url: Util.getRazorURL('/api/collections/nodes')},
			detail: {method: 'GET', url: Util.getRazorURL('/api/collections/nodes/:nodeId'), params:{nodeId:'noop'}},
			log:    {method: 'GET', url: Util.getRazorURL('/api/collections/nodes/:nodeId/log'), params:{nodeId:'noop'}}
    });
  }
]);

RazorAppServices.factory('Policy', ['$resource', 'Util',
  function($resource, Util){
    return $resource(Util.getRazorURL('/api/collections/policies/'), {}, {
			list:   {method:'GET', url: Util.getRazorURL('/api/collections/policies')},
			detail: {method:'GET', url: Util.getRazorURL('/api/collections/policies/:policyId'), params:{policyId:'noop'}},
			nodes:  {method:'GET', url: Util.getRazorURL('/api/collections/policies/:policyId/nodes'), params:{policyId:'noop'}}
    });
  }
]);

RazorAppServices.factory('Repo', ['$resource', 'Util',
  function($resource, Util){
    return $resource(Util.getRazorURL('/api/collections/repos'), {}, {
			list:   {method:'GET', url: Util.getRazorURL('/api/collections/repos')},
			detail: {method:'GET', url: Util.getRazorURL('/api/collections/repos/:repoId'), params:{repoId:'noop'}}
    });
  }
]);

RazorAppServices.factory('Task', ['$resource', 'Util',
  function($resource, Util){
    return $resource(Util.getRazorURL('/api/collections/tasks'), {}, {
			list:   {method:'GET', url: Util.getRazorURL('/api/collections/tasks')},
			detail: {method:'GET', url: Util.getRazorURL('/api/collections/tasks/:taskId'), params:{taskId:'noop'}}
    });
  }
]);

RazorAppServices.factory('Tag', ['$resource', 'Util',
  function($resource, Util){
    return $resource(Util.getRazorURL('/api/collections/tags'), {}, {
			list:     {method:'GET', url: Util.getRazorURL('/api/collections/tags')},
			detail:   {method:'GET', url: Util.getRazorURL('/api/collections/tags/:tagId'), params:{tagId:'noop'}},
			nodes:    {method:'GET', url: Util.getRazorURL('/api/collections/tags/:tagId/nodes'), params:{tagId:'noop'}},
			policies: {method:'GET', url: Util.getRazorURL('/api/collections/tags/:tagId/policies'), params:{tagId:'noop'}}
    });
  }
]);
