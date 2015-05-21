var os = require('os');

//should match the contents of games.cfg at all times
//any modifications should also fire saveGames();
var gameList = {
};

//addGame() should be fired every time a game is added
//to the hastable
var addGame = function addGame(name, path){
  global.loadGames();
  console.log(global.gameList);
  global.gameList[name] = path;
  console.log(global.gameList);
  saveGames();
}

var removeGames = function removeGame(name, path){
  global.gameList[name] = null;
  saveGames();
}

var loadGames = function loadGames(){
  console.log("Loaded the following hastable");
  console.log("------------------------------");
  global.gameList = global.readConfig('configs/default/games.cfg');
  console.log(global.gameList);
  console.log("______________________________");
}

//should be fired whenever global.gameList is modified aka whenever
//add/removeGame() is called
var saveGames = function saveGames(){
  global.writeConfig('configs/default/games.cfg', global.gameList);
}

function newWindow(src, w, h, id){
  global.newWindow(src, w, h, id);
}

global.gameList = global.gameList;
global.addGame = addGame;
global.removeGames = removeGames;
global.loadGames = loadGames;
global.saveGames = saveGames;
