var console = require ("console")
var fail = require ("fail")
var lib = require("lib/util.js")

// UpdateGame
exports.function = function(state, command) {
  var action = lib.findElementByTag(state.game.actions, command.actionName)
  var object = lib.findElementByTag(state.game.objects, command.objectName)

  var scene = state.game.scenes[state.sceneIndex]
  var sceneObject
  if (object) {
    sceneObject = lib.findByName(scene.objects, object.name)
  }

  console.log(action, object, scene.name, sceneObject != null)

  var response
  //first search for a response for applying the action to the object in this scene
  if (sceneObject) {
     response = lib.findActionResponse(sceneObject, action)
  }

  //next try to see if the object in this scene has a default say (ignoring the action)
  if  (!response && sceneObject && sceneObject.say) {
     response = {say: sceneObject.say}
  }

  //next try to see if the object has a default say (ignoring the scene and the action)
  if  (!response && object && object.say) {
     response = {say: object.say}
  }

  //finally check if the action has a default say (ignoring the scene and the object)
  if (!response && action && action.say) {
    response = {say: action.say}
  }

  //if still no response found then increment steps since last recognized command and return state
  if (!response) {
    state.stepsSinceRecognizedCommand++
    return state
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
