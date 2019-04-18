var console = require ("console")
var fail = require ("fail")
var lib = require("lib/util.js")

// UpdateGame
exports.function = function(state, command) {
  var actionName = command.actionName
  var objectName = command.objectName

  if (!actionName) {
    actionName = state.game.defaultActionName
  }

  var scene = state.game.scenes[state.sceneIndex]

  var object = lib.findItemByName(scene.objects, objectName)

  var response
  if (object) {
     response = lib.findActionResponse(object.responses, actionName, object.state)
  }
  if (!response) {
    response = lib.findActionResponse(state.game.responses, actionName, null)
  }

  state.stepsSinceRecognizedCommand = -1 //reset
  state.say = response.say

  if (object && response.newState) {
    object.state = response.newState
  }

  if (response.newImage) {
    scene.image.url = response.newImage
  }

  if (response.newScene) {
    var sceneIndex = lib.findIndexByName(state.game.scenes, response.newScene)
    if (sceneIndex >=0) {
      state.sceneIndex = sceneIndex
      state.completed = state.endSceneIndex == sceneIndex
    }
  }

  return state
}
