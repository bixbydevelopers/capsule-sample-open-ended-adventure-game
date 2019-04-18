var console = require("console")

exports.findIndexByName = findIndexByName
exports.findItemByName = findItemByName
exports.findActionResponse = findActionResponse

//finds the first index of a generic item with a specific name
function findIndexByName(items, name) {
  if (items && name) {
    for (var i=0; i<items.length; i++) {
      if (name.toLowerCase() == items[i].name.toLowerCase()) {
        return i
      }
    }
  }

  return-1
}

//finds the first index of a generic item with a specific name
function findItemByName(items, name) {
  var index = findIndexByName(items, name)
  if (index >=0) {
    return items[index]
  }
  return null
}

function findActionResponse(responses, actionName, objectState) {
  if (responses) {
    for (var i=0; i<responses.length; i++) {
      if (actionName.toLowerCase() == responses[i].action.toLowerCase() &&
            (!objectState || !responses[i].state  || responses[i].state.toLowerCase() == objectState.toLowerCase())) {
        return responses[i]
      }
    }
  }

  return null
}
