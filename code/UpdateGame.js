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

  var response
  //first search for a response for applying the action to the object in this scene
  if (sceneObject) {
     response = lib.findActionResponse(scene, sceneObject, action)
  }

  //next try to see if the object in this scene has a default say (ignoring the action)
  if  (!response && sceneObject && sceneObject.say) {
     response = {say: sceneObject.say}
  }

  //next check if the action has a default say (ignoring the scene and the object)
  if (!response && action && action.say) {
    response = {say: action.say}
  }

  //finally try to see if the object has a default say (ignoring the scene and the action)
  if  (!response && object && object.say) {
     response = {say: object.say}
  }

  //if still no response found then increment steps since last recognized command and return state
  if (!response) {
    state.stepsSinceRecognizedCommand++
  } else {
    state.stepsSinceRecognizedCommand = -1 //reset
    state.say = response.say
    applyAffect(state, scene, sceneObject, response.affect)
  }


  return state
}

function applyAffect(gameState, scene, sceneObject, affect) {
  //apply the response effect
  if (affect) {

    if (affect.newState && sceneObject) {
      sceneObject.state = affect.newState
    }

    if (affect.newSceneImage) {
      scene.image.url = affect.newSceneImage
    }

    if (affect.newScene) {
      var sceneIndex = lib.findIndexByName(gameState.game.scenes, affect.newScene)
      if (sceneIndex >=0) {
        gameState.sceneIndex = sceneIndex
        gameState.completed = gameState.endSceneIndex == sceneIndex
      }
    }

    if (affect.newExternalStates) {
      for (var i=0; i<affect.newExternalStates.length; i++) {
        changeExternalState(gameState, affect.newExternalStates[i].scene, affect.newExternalStates[i].object, affect.newExternalStates[i].newState)
      }
    }

  }
}

function changeExternalState(gameState, sceneName, objectName, newState) {
  var scene
  if (!sceneName) {
    scene = gameState.game.scenes[gameState.sceneIndex]
  } else {
    scene = lib.findByName(gameState.game.scenes, sceneName)
  }
  if (scene) {
    object = lib.findByName(scene.objects, objectName)
  }
  object.state = newState
}
