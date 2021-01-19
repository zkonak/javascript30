function playOnKeyDown(e) {
    const audioElement = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keyElement = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audioElement) return;
    audioElement.currentTime = 0;
    audioElement.play();
    keyElement.classList.add("playing");


}

function removeTransition(e) {
    if (e.propertyName != "transform") return;
    this.classList.remove("playing");


}
window.addEventListener("keydown", playOnKeyDown);
const keysElement = document.querySelectorAll(".key");
keysElement.forEach(key => key.addEventListener("transitionend", removeTransition));