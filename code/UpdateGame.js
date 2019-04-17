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

  var actionResponse
  if (object) {
     actionResponse = lib.findActionResponse(object.actionResponses, actionName, object.state)
  }
  if (!actionResponse) {
    actionResponse = lib.findActionResponse(state.game.actionResponses, actionName, null)
  }

  state.say = actionResponse.say
  if (object && actionResponse.newState) {
    object.state = actionResponse.newState
  }

  if (actionResponse.newScene) {
    var sceneIndex = lib.findIndexByName(state.game.scenes, actionResponse.newScene)
    if (sceneIndex >=0) {
      state.sceneIndex = sceneIndex
      state.completed = state.endSceneIndex == sceneIndex
    }
  }

  return state
}
