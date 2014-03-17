var RazorAppUtil = angular.module('RazorAppUtil', []);

RazorAppUtil.factory('Util',
	function($rootScope){
		var dumpJSON = config.dump || false;

		return {
			getRazorURL: function(url){
		    if ( config.exdata ) {
		      return "http://"+config.server+":"+config.port + "/exdata" + url + ".json";
		    } else {
		      return "http://"+config.server+":"+config.port + url;
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
