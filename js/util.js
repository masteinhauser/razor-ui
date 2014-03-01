function getRazorUrl(url){
  if ( config.exdata ) {
    return "http://"+config.server+":"+config.port + "/exdata" + url + ".json";
  } else {
    return "http://"+config.server+":"+config.port + url;
  }
}
