var console = require("console")
var lib = require("./lib/util");

const GAME = require("./data/game");

// ReadGame
exports.function = function() {
  //You can replace with a call to a web api - make sure you map api response to Game model
  return GAME
}
