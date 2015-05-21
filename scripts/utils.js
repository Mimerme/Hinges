//Read and write configs & create new windows
var fs = require('fs');
var exec = require('child_process').execFile;

var date = new Date();

var windows = {};

var writeConfig = function writeToConfig(path, data){
  var dat = JSON.stringify(data);
fs.writeFile(path, dat, function(err) {
    if(err) {
        alert("there was an error creating the config file, check the console for output");
        console.log(err);
    }
});
};

var writeLog = function writeToLog(data){
  fs.appendFile("latest.log", "[" + date.getMilliseconds() + "] " +  data, function(err) {
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
    console.log('There has been an error reading your JSON.')
    console.log(err);
  }
  return myObj;
};

//returns new window object
var newWindow = function newWindow(source, width, height, title, func){
  if(windows[source] == null){
  var win = global.window.nwDispatcher.requireNwGui().Window.open("../../skin/default/window_frame.html?id=" + source, {
    toolbar: true,
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
  if(func != null){
    win.on('document-end', func);
  }
  windows[source] = win;
}
else{
  windows[source].show();
  windows[source].focus();
}
return windows[source];
};

var runApp =function(path){
   console.log("Starting " + path);
   exec(path, function(err, data) {
        console.log(err)
        console.log(data.toString());
    });
}

var popupMessage = function(tvar){
  newWindow("pages/Misc/message_box_okay.html" ,600, 200, "New PopupMessasge",
  function(frame){
    if(frame != null){
        frame.contentDocument.body.innerHTML =
        frame.contentDocument.body.innerHTML.replace('[Text goes here]', tvar);
      }
    });
}

global.popupMessage = popupMessage;
global.writeConfig = writeConfig;
global.writeLog = writeLog;
global.readConfig = readConfig;
global.newWindow = newWindow;
global.runApp = runApp;
