var RazorAppServices = angular.module('RazorAppServices', ['ngResource']);

RazorAppServices.factory('NodeList', ['$resource',
  function($resource){
    return $resource(getRazorUrl('/api/collections/nodes'), {}, {
			query: {method:'GET'}
    });
  }
]);

RazorAppServices.factory('Node', ['$resource',
  function($resource){
    return $resource(getRazorUrl('/api/collections/nodes/:nodeId'), {}, {
			query: {method:'GET', params:{nodeId:'node1'}}
    });
  }
]);

RazorAppServices.factory('NodeLog', ['$resource',
  function($resource){
    return $resource(getRazorUrl('/api/collections/nodes/:nodeId/log'), {}, {
			query: {method:'GET', params:{nodeId:'node1'}}
    });
  }
]);

RazorAppServices.factory('PolicyList', ['$resource',
  function($resource){
    return $resource(getRazorUrl('/api/collections/policies'), {}, {
			query: {method:'GET'}
    });
  }
]);

RazorAppServices.factory('Policy', ['$resource',
  function($resource){
    return $resource(getRazorUrl('/api/collections/policies/:policyId'), {}, {
			query: {method:'GET', params:{policyId:'policy1'}, isArray:true}
    });
  }
]);

RazorAppServices.factory('BrokerList', ['$resource',
  function($resource){
    return $resource(getRazorUrl('/api/collections/brokers'), {}, {
			query: {method:'GET'}
    });
  }
]);

RazorAppServices.factory('Broker', ['$resource',
  function($resource){
    return $resource(getRazorUrl('/api/collections/brokers/:brokerId'), {}, {
			query: {method:'GET', params:{brokerId:'noop'}, isArray:true}
    });
  }
]);

RazorAppServices.factory('TaskList', ['$resource',
  function($resource){
    return $resource(getRazorUrl('/api/collections/tasks'), {}, {
			query: {method:'GET'}
    });
  }
]);

RazorAppServices.factory('Task', ['$resource',
  function($resource){
    return $resource(getRazorUrl('/api/collections/tasks/:taskId'), {}, {
			query: {method:'GET', params:{taskId:'noop'}, isArray:true}
    });
  }
]);

RazorAppServices.factory('TagList', ['$resource',
  function($resource){
    return $resource(getRazorUrl('/api/collections/tags'), {}, {
			query: {method:'GET'}
    });
  }
]);

RazorAppServices.factory('Tag', ['$resource',
  function($resource){
    return $resource(getRazorUrl('/api/collections/tags/:tagId'), {}, {
			query: {method:'GET', params:{tagId:'noop'}, isArray:true}
    });
  }
]);
