var lib = require("lib/util.js")

//Start the game. Initialize the game state.
exports.function = function(game) {
  var sceneIndex = lib.findIndexByName(game.scenes, game.startScene)
  var endSceneIndex = lib.findIndexByName(game.scenes, game.endScene)
  state = {
    game: game,
    started: true,
    sceneIndex: sceneIndex,
    endSceneIndex: endSceneIndex,
    completed: game.endSceneIndex == sceneIndex,
    say: game.description,
    step: 0,
    stepsSinceRecognizedCommand: -1
  }

  return state
}
