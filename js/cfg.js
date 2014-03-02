var config = {};

config.exdata = true;
config.dump		= false;

if (config.exdata) {
  config.server = "localhost";
  config.port = "5000";
} else {
  config.server = "10.128.2.2";
  config.port = "8080";
}	

