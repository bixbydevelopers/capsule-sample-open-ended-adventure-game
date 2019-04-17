module.exports = [
  // Scenes of the adventure game
  {

    //The game's name
    name: "Escape Room!",
    //Game starts with this description.
    description: "You wake up in an unfamiliar room. The room is too dark. You can't see anything but you are sure this is not your room.",
    startScene: "unknown room", //game starts in this scene
    endScene: "bright room", //game ends when user enters this scene

    //What is the default action to take if user command does not include an action name, e.g. if user just says "door!" and defaultAction is "see" then user command will be interpreted as applying "See" to "Door"
    defaultActionName: "See",
    //The default affect of any action ignoring any context (ignoring the scene and the object they apply too)
    defaultActionResponse: "Good idea, but let's not do that right now. Try something else.",
    //The default affect of specific actions ignoring any context (ignoring the scene and the object they apply too)
    //The actions should match the symbols in ActionName.model.bxb enum
    actionResponses: [
      {action: "See", say: "There is not much to see here."},
      {action: "Feel", say: "There's nothing much to feel here. Oh, what's this? There's something on the wall! It feels like a light switch."},
      {action: "Drink", say: "You think about drinking but then you change your mind."},
      {action: "Eat", say: "I'm not sure that's really something you want to eat right now."},
      {action: "Talk", say: "There is no one here to talk to."},
      {action: "Walk", say: "You walk a few steps and... bang! You hit a wall!"},
      {action: "Kick", say: "Kicking won't help here, this is not a soccer game!"},
      {action: "Pick", say: "You look around for something to pick but don't find anything!"},
      {action: "Drop", say: "Nothing to drop here."},
      {action: "Sing", say: "You sing your favorite song: 'the wheels on the bus go round and round'. You can sing that all day. What a great song!"},
      {action: "Open", say: "This is nothing you can open."},
      {action: "Close", say: "This is nothing you can close."},
      {action: "TurnOn", say: "You can't turn this on. Try something else."},
      {action: "TurnOff", say: "You can't turn this off. Try something else."},
      {action: "Hint", say:  "You can see, feel, drink, eat, pick, drop, kick, walk, talk and sing. Try those on the objects in the room and see what happens."},
    ],
    scenes: [
    {
      name: "Unknown room", //scene name
      image: {
        url: '/images/emptyRoom_lightsOff.jpg' //scene image
      },
      objects: [ //objects in the dark room, object names should match the symbols in ObjectName.model.bxb enum
        {
          name: "Door",
          state: "close",
          actionResponses: [
            {action: "See", say: "You spend a few minutes looking at the door until you had enough. Door watching is not your thing."},
            {action: "Feel", say: "The door feels very old and lonely."},
            {action: "Drink", say: "It's not liquid you know."},
            {action: "Eat", say: "Hmmm, seems you are very hungry but this door doesn't taste that good."},
            {action: "Talk", say: "I didn't know you are that lonely."},
            {action: "Pick", say: "The door is too heavy."},
            {action: "Kick", state: "close", say: "Bang! You kicked the closed door. It's still close. There should be a better way to open the door."},
            {action: "Kick", state: "open", newState: "close", say: "Bang! You shut the door close. That did hurt a little."},
            {action: "Sing", say: "You sing to the door. You don't have the best voice but I think the door liked it."},
            {action: "Open", state: "close", newState: "open", newScene: "bright room", say: "You open the door, there is another room. You walk over to the new room. Yes! This is your bright and beautiful room!"},
            {action: "TurnOn", say: "You can't turn the door on. You can open or close it. I thought you'd know that."},
            {action: "TurnOff", say: "Ok, it's turned off. Not really. You should know better."},
          ]
        },
        {
          name: "LightSwitch",
          state: "off",
          actionResponses: [
            {action: "See", say: "It looks like a normal light switch."},
            {action: "Feel", say: "You feel it, it feels good."},
            {action: "Drink", say: "It's a light switch not milk."},
            {action: "Eat", say: "This is not something you want to eat."},
            {action: "Talk", say: "Hello light switch, how are you doing today?.... so rude, no answer."},
            {action: "Pick", say: "You can't pick it. It's attached to the wall."},
            {action: "Kick", say: "It's too high for you to kick it. There should be a better way to operate this thing. Hmmm."},
            {action: "TurnOn", state: "on", say: "The light is already on! What an ugly room. Nothing here but a door."},
            {action: "TurnOn", state: "off", newState: "on", newImage:"/images/emptyRoom_lightsOn.jpg", say: "Click. Light! Ooh look the room is empty. But there is a door."},
            {action: "TurnOff", state: "on", newState: "off", newImage:"/images/emptyRoom_lightsOff.jpg", say: "Click. Darkness! You can't see anything anymore."},
            {action: "TurnOff", state: "off", say: "It's already off."},
          ]
        },
        {
          name: "Wall",
          actionResponses: [
            {action: "See", say: "You spend a few minutes looking at the wall and conclude that this is no more than an ordinary wall."},
            {action: "Feel", say: "The wall feels cold. Oh, there is something here. It's a light switch!"},
            {action: "Drink", say: "Nope. Not drinkable."},
            {action: "Eat", say: "You cannot eat the wall! Maybe you'll find something more tasty on the other side of the wall. But how to get there?"},
            {action: "Talk", say: "Don't do that. People will think you are mad."},
            {action: "Pick", say: "The wall is too heavy."},
            {action: "Kick", say: "Ouch! That was not a good idea."},
            {action: "Sing", say: "You sing from the bottom of your heart. You can strike that off your bucket list now."},
            {action: "Open", say: "'Open Sesame!'. Nope. That didn't work."},
            {action: "TurnOn", say: "Hmmm, you can't find a switch on that to turn it on."},
            {action: "Turnoff", say: "Hmmm, you can't find a switch on that to turn it off."},
          ]
        }
      ]
    },
    {
      name: "Bright room", //scene name
      image: {
        url: '/images/brightRoom.jpg' //scene image
      },
      objects: []
    }
    ]
  },
]
