# RetroLoop

![Retro Loop - a game by Matthias Jäger](images/Browser.png)

> A text-based adventure gane where you play as an employee of a global corporation. Story and game development by ChatGpt <chat.openai.com> and Matthias Jäger. Images by DiffusionBee <diffusionbee.com>

# Play it for free: https://matthias-jaeger-net.github.io/retro-loop/

# Contributor hints

```javaScript
/**
* Story (Example)
* - Make sure you test additions to story
*/
const story = {
    ...
    sceneName: {
        // Mandatory:
        // Give the scene a meaningful title
        title: "The headline of the scene",
        // Mandatory:
        // Describe the scenes vibe and choices without too
        // much words and lengthy text that no one reads
        description:
            "A short body of text to describe the current scene",
        // Optional:
        // One or more choices are rendered as buttons with a
        // callback to the scene to be played
        choices: [
            // <button onclick="renderScene(next)">label</button>
            { label: "Button text", next: "Name of the scene" },
            { label: "Button text", next: "Name of the scene" },
            ...
        ],
        // Optional:
        // Render an image from the images folder
        thumbnail: "images/cover.png",
        // Optional:
        // Add elements to the inventory in the global
        // playerState object
        // TODO: implement branching based on inventory
        inventory: [
            "test"
        ],
        // Optional:
        // Player can take damage when visiting a scene
        // renderScene checks and calls gameOver when the
        // playerState.health goes below 0
        damage: 20,

    },
    ...
}
```

### Next round:

-   Establish conditional branching in story, based on player object state

## Ideas:

-   Different sounds based on scene
-   Generative images, drawings or other graphical assets
-   How to write a test for story.js?
