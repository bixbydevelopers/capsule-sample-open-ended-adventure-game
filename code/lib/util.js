var console = require("console")

exports.findIndexByName = findIndexByName
exports.findByName = findByName
exports.findActionResponse = findActionResponse
exports.findElementByTag = findElementByTag

//finds first element that matches a specific tag
function findElementByTag(array, tag) {
   if (tag && array) {
     for (var i=0; i<array.length; i++) {
        if (array[i].tags) {
          for (var j=0; j<array[i].tags.length; j++) {
            if (tag.toLowerCase() == array[i].tags[j].toLowerCase()) {
               return array[i]
            }
          }
        }
     }
   }
   return null
}

//finds the first index of an element with a specific name in an array
function findIndexByName(array, name) {
  if (array && name) {
    for (var i=0; i<array.length; i++) {
      if (name.toLowerCase() == array[i].name.toLowerCase()) {
        return i
      }
    }
  }

  return-1
}

//finds the first index of an element with a specific name in an array
function findByName(array, name) {
  var index = findIndexByName(array, name)
  if (index >=0) {
    return array[index]
  }
  return null
}

function findActionResponse(scene, object, action) {
  if (!object || !action) {
    return null
  }
  var responses = object.responses

  if (responses) {
    for (var i=0; i<responses.length; i++) {
      if (action.name.toLowerCase() == responses[i].action.toLowerCase() && checkConditions(scene, object, responses[i].conditions)) {
        return responses[i]
      }
    }
  }

  return null
}

function checkConditions(scene, object, conditions) {
  if (!scene || !object || !conditions) {
    return false
  }

  for (var i=0; i<conditions.length; i++) {
    var condition = conditions[i]
    var sourceState = condition.state
    var targetState
    if (!condition.object) {
      targetState = object.state
    } else {
      var targetObject = findByName(scene.objects, condition.object)
      if (targetObject) {
        targetState = targetObject.state
      }
    }
    console.log(sourceState, targetState)
    if (!sourceState || !targetState || targetState.toLowerCase() != sourceState.toLowerCase()) {
      return false
    }
  }
  return true
}
