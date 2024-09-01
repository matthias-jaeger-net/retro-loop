const playerState = {
    health: 100,
    inventory: [],
};

let clickSound, typeSound, ambientSound;

function preload() {
    // Preload sound assets made with jsfxr
    clickSound = loadSound("sound/click.wav");
    typeSound = loadSound("sound/click.wav");

    // Preload my junky synth loop
    ambientSound = loadSound("sound/bleeps.m4a");
}

function setup() {
    // Remove default canvas
    noCanvas();

    // Lower down the repeating sound
    typeSound.setVolume(0.1);

    // Start ambient sound
    ambientSound.play();
    ambientSound.loop();
    ambientSound.setVolume(0.1);

    // Render first scene
    renderScene("start");
}
