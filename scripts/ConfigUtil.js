//Read and write configs
var fs = require('fs');

var date = new Date();

var writeConfig = function writeToConfig(path, data){
fs.appendFile(path, JSON.stringify(data), function(err) {
    if(err) {
        alert("there was an error creating the config file, check the console for output");
        console.log(err);
    }
});
};

var writeLog = function writeToLog(data){
  fs.appendFile("latest.log", "[" + date.getMilliseconds() + "]" +  data, function(err) {
      if(err) {
          alert("there was an error creating the log file, check the console for output");
          console.log(err);
      }
  });
};

exports.writeConfig = writeConfig;
exports.writeLog = writeLog;
