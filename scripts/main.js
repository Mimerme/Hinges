var configUtil = require("./ConfigUtil.js");
var os = require('os');

var VERSION = "0.2";
var BUILD_TYPE = "developer";

//NodeJS Main script, run on launch
console.log("Running main script");

configUtil.writeLog("------------------------------------------------------------------");
configUtil.writeLog("\r\n");
configUtil.writeLog("New instance of Hinges v." + VERSION + ", BuildType: " +  BUILD_TYPE);
configUtil.writeLog("\r\n");
configUtil.writeLog("Running on OS :"  + os.type() + " : "+ os.platform() + " : " + os.arch());
configUtil.writeLog("\r\n");
