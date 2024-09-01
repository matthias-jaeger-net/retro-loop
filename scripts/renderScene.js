function renderScene(sceneKey) {
    // Render a scene based on the current part of the story
    const scene = story[sceneKey];

    // Select DOM elements
    const wrapper = document.createElement("div");
    wrapper.classList.add("scene");

    const title = document.createElement("h1");
    title.textContent = scene.title;
    wrapper.appendChild(title);

    const description = document.createElement("p");
    description.textContent = ""; // Fill up later eith typewriter
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
