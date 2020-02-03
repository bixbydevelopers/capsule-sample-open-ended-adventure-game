<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">Bixby Adventure Game Sample Capsule</h1>
</p>

## Overview
This capsule can be used as a reference for building adventure games for Bixby.

## How to get started

* Download and install the Bixby Studio IDE from the [Bixby Developer Center](http://bixbydevelopers.com)
* Download this capsule (zip is the easiest way) from Github. Unzip in your directory of choice
* Open the Capsule in Bixby Studio
* Open the simulator and give it a try!


## How to try
Just ask Bixby to start an adventure game:

```
Start an adventure game.
```

Then try out different inputs to figure out how you can escape the room. You can always ask for `Help` if you ran out of ideas.

```
Help!
```

The idea is to apply different actions and gather enough clues on how to escape the room, for example you can say:
```
Walk around!
```
Or you can say:
```
Kick the wall
```

## How to customize
* Update the game data (name, description, scenes, objects, actions and action responses and other associated data) in `code/game.js`
* If you want to use images for the different scenes in the game you can either use a web URL or you can save your image under `assets/images` and refer to them with a relative path, e.g. `images/cow.png` (you might have to wait a little until the IDE uploads images to the cloud)
* Change the capsule id to reflect your organization and your content. The capsule id is defined in the `capsule.bxb` file
* You can customize the game completion statement (`resources/base/dialog/macro/GameState_Statement.dialog.bxb`) and the question asked from the user at each step: (`resources/base/dialog/macro/GameState_Statement.dialog.bxb`)
* The training in this sample capsule is basic. You will likely need to add additional training for your game especially need utterances that mention the actions and objects in your game. You should also add vocabulary for your game actions and objects to `resources/en/vocab/ActionName.vocab.bxb` and `resources/en/vocab/ObjectName.vocab.bxb`
* Have fun!

---

## Additional Resources

### Your Source for Everything Bixby
* [Bixby Developer Center](http://bixbydevelopers.com) - Everything you need to get started with Bixby Development!
* [Bixby News, Blogs and Tutorials](https://bixby.developer.samsung.com/) - Bixby News, Tutorials, Blogs and Events

### Guides & Best Practices
* [Quick Start Guide](https://bixbydevelopers.com/dev/docs/get-started/quick-start) - Build your first capsule
* [Design Guides](https://bixbydevelopers.com/dev/docs/dev-guide/design-guides) - Best practices for designing your capsules
* [Developer Guides](https://bixbydevelopers.com/dev/docs/dev-guide/developers) - Guides that take you from design and modeling all the way through deployment of your capsules

### Bixby Videos
* [Bixby Developers YouTube Channel](https://www.youtube.com/c/bixbydevelopers) - Tutorial videos, Presentations, Capsule Demos and more

### Bixby Podcast
* [Bixby Developers Chat](http://bixbydev.buzzsprout.com/) - Voice, Conversational AI and Bixby discussions 

### Bixby on Social Media
* [@BixbyDevelopers](https://twitter.com/bixbydevelopers) - Twitter
* [Facebook](https://facebook.com/BixbyDevelopers)
* [Instagram](https://www.instagram.com/bixbydevelopers/)

### Need Support?
* Have a feature request? Please suggest it in our [Support Community](https://support.bixbydevelopers.com/hc/en-us/community/topics/360000183273-Feature-Requests) to help us prioritize.
* Have a technical question? Ask on [Stack Overflow](https://stackoverflow.com/questions/tagged/bixby) with tag “bixby”
