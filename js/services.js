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
			query: {method:'GET', params:{nodeId:'node1'}, isArray:true}
    });
  }
]);
