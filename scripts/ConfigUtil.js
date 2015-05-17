//Read and write configs
var fs = require('fs');

var date = new Date();

var windows = {};

var writeConfig = function writeToConfig(path, data){
fs.writeFile(path, JSON.stringify(data), function(err) {
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

var readConfig = function readFromConfig(path){
  var data = fs.readFileSync(path),
      myObj;

  try {
    myObj = JSON.parse(data);
  }
  catch (err) {
    console.log('There has been an error parsing your JSON.')
    console.log(err);
  }
  return myObj;
};

function newWindow(source, width, height, title){
  if(windows[source] == null){
  var win = require('nw.gui').Window.open("../../window_frame.html?id=" + source, {
    toolbar: false,
    frame: false,
    position: 'center',
    width: width,
    height: height,
    min_width: width,
    min_height: height,
    max_width: width,
    max_height: height
  });
  win.minimize();
  win.restore();
  win.on('close', function() {
  windows[source] = null;
  win.close(true);
  });
  windows[source] = win;
}
else{
  windows[source].show();
  windows[source].focus();
}
}
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

exports.writeConfig = writeConfig;
exports.writeLog = writeLog;
exports.readConfig = readConfig;
