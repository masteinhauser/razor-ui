var config = {};

config.dump		= true;
//config.dump		= false;
//config.exdata = true;
config.exdata = false;

if (config.exdata) {
  config.server = "localhost";
  config.port = "5000";
} else {
  config.server = "10.128.2.2";
  config.port = "80";
}	

