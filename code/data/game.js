const ACT = require("./actions")
const OBJ = require("./objects")
const SCENE = require("./scenes")
const STATE = require("./states")

module.exports = [
  // Scenes of the adventure game
  {

    //The game's name
    name: "Escape Room!",
    //Game starts with this description.
    description: "You wake up in an unfamiliar room. The room is too dark. You can't see anything but you are sure this is not your room.",
    startScene: SCENE.UNKNOWN_ROOM, //game starts in this scene
    endScene: SCENE.BRIGHT_ROOM, //game ends when user enters this scene

    //list of actions in the game, tags to match the action and what to say if user tries to apply the action without referring to any object
    actions: [
       {name: ACT.SEE, tags: ["see", "look at", "look"], say: "There is not much to see here."},
       {name: ACT.FEEL, tags: ["feel", "touch"], say: "There's nothing much to feel. Oh, what's this? There's something on the wall! It feels like a light switch."},
       {name: ACT.DRINK, tags: ["drink"], say: "Not sure if you want to drink anything right now."},
       {name: ACT.EAT, tags: ["eat"], say: "Not sure if you want to eat anything right now. You are not that hungry anyway."},
       {name: ACT.TALK, tags: ["talk", "speak", "say"], say: "There is no one here to talk to."},
       {name: ACT.WALK, tags: ["walk", "stroll"], say: "You walk a few steps and... bang! You hit a wall!"},
       {name: ACT.KICK, tags: ["kick"], say: "Kicking won't help here, this is not a soccer game!"},
       {name: ACT.PICK, tags: ["pick"], say: "You look around for something to pick but don't find anything!"},
       {name: ACT.DROP, tags: ["drop"], say: "Nothing to drop here."},
       {name: ACT.SING, tags: ["sing"], say: "You sing your favorite song: 'the wheels on the bus go round and round'. You can sing that all day. What a great song!"},
       {name: ACT.OPEN, tags: ["open"], say: "This is nothing you can open."},
       {name: ACT.CLOSE, tags: ["close"], say: "This is nothing you can close."},
       {name: ACT.TURN_ON, tags: ["turn on", "switch on", "on"], say: "You can't turn this on. Try something else."},
       {name: ACT.TURN_OFF, tags: ["turn off", "switch off", "off"], say: "You can't turn this off. Try something else."},
       {name: ACT.HINT, tags: ["help", "hint", "what can I do"], say:  "You can see, feel, drink, eat, pick, drop, kick, walk, talk and sing. Try those on the objects in the room and see what happens."},
       {name: ACT.LEAN, tags: ["lean"], say:  "Not sure how you want to lean on that."},
    ],

    //list of objects in the game, tags to match the object and what to say if user refers to any object without specifying an action
    objects: [
       {name: OBJ.DOOR, tags: ["door"], say: "You spend a few minutes looking at the door until you had enough. Door watching is not your thing."},
       {name: OBJ.LIGHT_SWITCH, tags: ["light switch", "lights", "light", "switch"], say: "It looks like a normal light switch."},
       {name: OBJ.WALL, tags: ["wall"], say: "You spend a few minutes looking at the wall and conclude that this is no more than an ordinary wall."},
    ],

    scenes: [
    {
      name: SCENE.UNKNOWN_ROOM, //scene name
      image: {
        url: '/images/emptyRoom_lightsOff.jpg' //scene image
      },
      objects: [ //objects in the dark room, object names should match the symbols in ObjectName.model.bxb enum
        {
          name: OBJ.DOOR,
          state: "close",
          responses: [
            {action: ACT.SEE, say: "You spend a few minutes looking at the door until you had enough. Door watching is not your thing."},
            {action: ACT.FEEL, say: "The door feels very old and lonely."},
            {action: ACT.DRINK, say: "It's not liquid you know."},
            {action: ACT.EAT, say: "Hmmm, seems you are very hungry but this door doesn't taste that good."},
            {action: ACT.TALK, say: "I didn't know you are that lonely."},
            {action: ACT.PICK, say: "The door is too heavy."},
            {action: ACT.KICK, conditions: [{state: STATE.CLOSE}], say: "Bang! You kicked the closed door. It's still close. There should be a better way to open the door."},
            {action: ACT.KICK, conditions: [{state: STATE.OPEN}], affect: {newState: STATE.CLOSE}, say: "Bang! You shut the door close. That did hurt a little."},
            {action: ACT.SING, say: "You sing to the door. You don't have the best voice but I think the door liked it."},
            {action: ACT.OPEN, conditions: [{state: STATE.CLOSE}, {object: OBJ.LIGHT_SWITCH, state: STATE.ON}], affect: {newState: STATE.OPEN, newScene: SCENE.BRIGHT_ROOM}, say: "You open the door, there is another room. You walk over to the new room. Yes! This is your bright and beautiful room!"},
            {action: ACT.OPEN, conditions: [{state: STATE.CLOSE}, {object: OBJ.LIGHT_SWITCH, state: STATE.OFF}], say: "Great idea! But it's too dark, you can't find the door handle!"},
            {action: ACT.TURN_ON, say: "You can't turn the door on. You can open or close it. I thought you'd know that."},
            {action: ACT.TURN_OFF, say: "Ok, it's turned off. Not really. You should know better."},
          ]
        },
        {
          name: OBJ.LIGHT_SWITCH,
          state: STATE.OFF,
          responses: [
            {action: ACT.SEE, say: "It looks like a normal light switch."},
            {action: ACT.FEEL, say: "You feel it, it feels good."},
            {action: ACT.DRINK, say: "It's a light switch not milk."},
            {action: ACT.EAT, say: "This is not something you want to eat."},
            {action: ACT.TALK, say: "Hello light switch, how are you doing today?.... so rude, no answer."},
            {action: ACT.PICK, say: "You can't pick it. It's attached to the wall."},
            {action: ACT.KICK, say: "It's too high for you to kick it. There should be a better way to operate this thing. Hmmm."},
            {action: ACT.TURN_ON, conditions: [{state: STATE.ON}], say: "The light is already on! What an ugly room. Nothing here but a door."},
            {action: ACT.TURN_ON, conditions: [{state: STATE.OFF}], affect: {newState: STATE.ON, newSceneImage:"/images/emptyRoom_lightsOn.jpg"}, say: "Click. Light! Ooh look the room is empty. But there is a door."},
            {action: ACT.TURN_OFF, conditions: [{state: STATE.ON}], affect: {newState: STATE.OFF, newSceneImage:"/images/emptyRoom_lightsOff.jpg"}, say: "Click. Darkness! You can't see anything anymore."},
            {action: ACT.TURN_OFF, conditions: [{state: STATE.OFF}], say: "It's already off."},
          ]
        },
        {
          name: OBJ.WALL,
          responses: [
            {action: ACT.SEE, say: "You spend a few minutes looking at the wall and conclude that this is no more than an ordinary wall."},
            {action: ACT.FEEL, say: "The wall feels cold. Oh, there is something here. It's a light switch!"},
            {action: ACT.DRINK, say: "Nope. Not drinkable."},
            {action: ACT.EAT, say: "You cannot eat the wall! Maybe you'll find something more tasty on the other side of the wall. But how to get there?"},
            {action: ACT.TALK, say: "Don't do that. People will think you are mad."},
            {action: ACT.PICK, say: "The wall is too heavy."},
            {action: ACT.KICK, say: "Ouch! That was not a good idea."},
            {action: ACT.SING, say: "You sing from the bottom of your heart. You can strike that off your bucket list now."},
            {action: ACT.OPEN, say: "'Open Sesame!'. Nope. That didn't work."},
            {action: ACT.TURN_ON, say: "Hmmm, you can't find a switch on that to turn it on."},
            {action: ACT.TURN_OFF, say: "Hmmm, you can't find a switch on that to turn it off."},
            {action: ACT.LEAN, conditions: [{object: OBJ.LIGHT_SWITCH, state: STATE.OFF}], affect: {newSceneImage:"/images/emptyRoom_lightsOn.jpg", newExternalStates: [{object: OBJ.LIGHT_SWITCH, newState: STATE.ON}]}, say: "You lean on the wall. Oh what happened? You accidentally leaned on a light switch and turned it on. What an ugly room. Nothing here but a door."},
            {action: ACT.LEAN, conditions: [{object: OBJ.LIGHT_SWITCH, state: STATE.ON}], affect: {newSceneImage:"/images/emptyRoom_lightsOff.jpg", newExternalStates: [{object: OBJ.LIGHT_SWITCH, newState: STATE.OFF}]}, say: "You lean on the wall. Oh what happened? You accidentally leaned on a light switch and turned it off. Everything is dark again."},
          ]
        }
      ]
    },
    {
      name: SCENE.BRIGHT_ROOM, //scene name
      image: {
        url: '/images/brightRoom.jpg' //scene image
      },
    }
    ]
  },
]
