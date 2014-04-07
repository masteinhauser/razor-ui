var RazorAppUtil = angular.module('RazorAppUtil', []);

RazorAppUtil.factory('Util',
	function($rootScope){
		var dumpJSON = config.dump || false;

		return {
			getRazorURL: function(url){
		    if ( config.exdata ) {
		      return prefix + "/exdata" + url + ".json";
		    } else {
		      return prefix + url;
		    }
		  },
	    showJSON: function(show){
				if( show != null ){
					dumpJSON = show;
				}
			
				return dumpJSON;
			}
		}
	}
);
