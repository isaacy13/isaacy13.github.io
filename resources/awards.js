updateHeight();
window.addEventListener("resize", updateHeight);

function updateHeight() {
    document.querySelector(".welcome-container").style.height = window.innerHeight + "px";
}