var RazorAppUtil = angular.module('RazorAppUtil', []);

RazorAppUtil.factory('Util',
  function($rootScope){
    var dumpJSON = config.dump || false;

    return {
      getRazorURL: function(url){
        if ( config.exdata ) {
          return config.prefix + "/exdata" + url + ".json";
        } else {
          return config.prefix + url;
        }
      },
      showJSON: function(show){
        if( show != null ){
          dumpJSON = show;
        }

        return dumpJSON;
      },
      isActiveNav: function(navPath) {
        return (navPath === $location.path());
      }
    }
  }
);
