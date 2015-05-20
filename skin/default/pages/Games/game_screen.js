var os = require('os');

//should match the contents of games.cfg at all times
//any modifications should also fire saveGames();
var gameList = {
};

//addGame() should be fired every time a game is added
//to the hastable
function addGame(name, path){
  gameList[name] = path;
  saveGames();
}

function removeGame(name, path){
  gameList[name] = null;
  saveGames();
}

function loadGames(){
  console.log("Loaded the following hastable");
  console.log("------------------------------");
  gameList = global.readConfig('configs/default/games.cfg');
  console.log(gameList);
}

//should be fired whenever gameList is modified aka whenever
//add/removeGame() is called
function saveGames(){
  global.writeConfig('configs/default/games.cfg', gameList);
}

function newWindow(src, w, h, id){
  global.newWindow(src, w, h, id);
}
