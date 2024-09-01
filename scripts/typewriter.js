// Function for typewriter effect
function typeWriter(element, text, delay, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, delay);
        } else if (callback) {
            callback();
        }
        typeSound.play();
    }
    type();
}
