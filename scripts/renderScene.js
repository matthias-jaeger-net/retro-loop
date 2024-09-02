function renderScene(sceneKey) {
    // Render a scene based on the current part of the story
    const scene = story[sceneKey];

    // DOM elements
    const wrapper = document.createElement("div");
    wrapper.classList.add("scene");

    const title = document.createElement("h1");
    title.textContent = scene.title;
    wrapper.appendChild(title);

    const thumbnail = document.createElement("div");
    wrapper.appendChild(thumbnail);

    const description = document.createElement("p");
    // Start empty and fill later with typewriter
    description.textContent = "";
    wrapper.appendChild(description);

    const actions = document.createElement("div");
    actions.classList.add("actions");

    // Construct the button group
    scene.choices.forEach((choice) => {
        const button = document.createElement("button");
        button.textContent = choice.label;
        button.addEventListener("click", () => {
            renderScene(choice.next);
            clickSound.play();
        });
        actions.appendChild(button);
    });
    wrapper.appendChild(actions);

    // Clear the screen
    document.body.innerHTML = "";

    // Add the finished dialogue
    document.body.appendChild(wrapper);

    // If the current scene has an inventory to pick from
    if ("inventory" in scene) {
        scene["inventory"].forEach((item) => {
            playerState.inventory.push(item);
        });
    }

    // If the current scene has a damage to be subtracted
    if ("damage" in scene) {
        const damageValue = scene["damage"];

        if (playerState.health - damageValue <= 0) {
            renderScene("gameOver");
        } else {
            playerState.health -= damageValue;
        }
    }

    console.log(playerState);

    // Check for thumbnail image
    if (scene.thumbnail) {
        const img = document.createElement("img");
        img.src = scene.thumbnail;
        thumbnail.appendChild(img);
    }

    // Disable all buttons before animation
    actions.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
    });

    // Animation for typing the description
    typeWriter(description, scene.description, 20, () => {
        // Animation complete, enable buttons
        actions.querySelectorAll("button").forEach((button) => {
            button.disabled = false;
        });
    });
}
