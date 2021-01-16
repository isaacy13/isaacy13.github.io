// height setter for large picture
updateHeight();
window.addEventListener("resize", updateHeight);

function updateHeight() {
    document.querySelector(".welcome-container").style.height = window.innerHeight + "px";
}

// card animations on scroll in view
let awardsCards = document.getElementsByTagName("td");
let awardsCardsAnimated = []
for (let i = 0; i < awardsCards.length; i++)
    awardsCardsAnimated.push(false);
