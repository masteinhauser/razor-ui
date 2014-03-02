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
