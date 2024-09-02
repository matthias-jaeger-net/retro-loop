# retro-loop

> A text-based adventure gane where you play as an employee of a global corporation.

Story and game development by ChatGpt <chat.openai.com> and Matthias Jäger.

### Deployment

https://matthias-jaeger-net.github.io/retro-loop/

### Story

```javaScript
const story = {
    ...
    sceneName: {
        // Mandatory
        title: "The headline of the scene",
        description:
            "A short body of text to describe the current scene",
        // Optional
        choices: [
            { label: "Button text", next: "Name of the scene" },
            { label: "Button text", next: "Name of the scene" },
            ...
        ],
        // Optional
        thumbnail: "images/cover.png",
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
