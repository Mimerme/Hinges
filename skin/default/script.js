var gui = require('nw.gui');

var window = gui.Window.get();

var developerTools = {
  key : "Ctrl+Shift+A",
  failed : function(msg) {
    console.log(msg);
  }
};

var debug = new gui.Shortcut(developerTools);
gui.App.registerGlobalHotKey(debug);

$(document).ready(function(){
  console.log("jquery sucessfully initialized");
  console.log("nodeJS sucessfully initialized");
});

$("#close").click(function(){
  console.log("Closing the active window");
  window.close(false);
});

debug.on('active', function(){
  window.showDevTools();
});
