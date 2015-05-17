var os = require('os');

console.log(__dirname);

var gameList = {};

function addGame(name, path){
  gameList[name] = path;
}

function loadGames(){
  console.log("Loaded the following hastable");
  console.log("------------------------------");
  console.log(gameList);
}

function saveGames(){
  configUtil.writeConfig("games.cfg", gameList);
}

function newWindow(src, w, h, id){
  configUtil.newWindow(src, w, h, id);
}
