<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">Bixby Adventur Game Sample Capsule</h1>
</p>

## Overview


## How to get started

* Download and install the Bixby Studio IDE from the [Bixby Developer Center](http://bixbydevelopers.com)
* Download this capsule (zip is the easiest way) from Github. Unzip in your directory of choice
* Open the Capsule in Bixby Studio
* Open the simulator and give it a try!


## How to try
Ask to start an adventure game:

```
Start an adventure game.
```
You can ask help to find out what's possible:
```
Help!
```
Try applying different actions:
```
Walk around!
```
```
Kick the wall
```

## How to customize
* Update the game data (name, scenes, objects, actions and action responses and other associated data) into `code/game.js`
* Change the recognized actions and objects in the capsule model by modifying `models/concepts/ActionName.model.bxb` and `models/concepts/ObjectName.model.bxb`, make sure to also update the vocab files, the training and the data to comply to the new model changes.
* If you want to use images for the different scenes in the game you can either use a web URL or you can save your image under `assets/images` and refer to them with a relative path, e.g. `images/cow.png` (you might have to wait a little until the IDE uploads images to the cloud)
* Change the capsule id to reflect your organization and your content. The capsule id is defined in the `capsule.bxb` file
* You can customize the NoResult dialog (`resources/base/dialog/Content_NoResult.dialog.bxb`)
* Have fun!

---

## Additional Resources

### Your Source for Everything Bixby
* [Bixby Developer Center](http://bixbydevelopers.com) - Everything you need to get started with Bixby Development!

### Guides & Best Practices
* [Quick Start Guide](https://bixbydevelopers.com/dev/docs/get-started/quick-start) - Build your first capsule
* [Design Guides](https://bixbydevelopers.com/dev/docs/dev-guide/design-guides) - Best practices for designing your capsules
* [Developer Guides](https://bixbydevelopers.com/dev/docs/dev-guide/developers) - Guides that take you from design and modeling all the way through deployment of your capsules

### Video Guides
* [Introduction to Bixby](https://youtu.be/DFvpK4PosvI) - Bixby and the New Exponential Frontier of Intelligent Assistants
* [Bixby Fundamentals](https://bixby.developer.samsung.com/newsroom/en-us/22/01/2019/Teaching-Bixby-Fundamentals-What-You-Need-to-Know) - Bixby Fundamentals: What You Need to Know

### Need Support?
* Have a feature request? Please suggest it in our [Support Community](https://support.bixbydevelopers.com/hc/en-us/community/topics/360000183273-Feature-Requests) to help us prioritize.
* Have a technical question? Ask on [Stack Overflow](https://stackoverflow.com/questions/tagged/bixby) with tag “bixby”
