// list of clickable cards
let cards = document.querySelectorAll(".card");
let cardsDesc = document.querySelectorAll(".popup-text");
// "global" variable to pull out of openPopup func
let currentWindow = null;

// set onclick listeners for cards
for (let i = 0; i < cards.length; i++)
    cards[i].addEventListener("click", function() { openPopup(i) });

// styles popup (based on selected card) & makes popup displayable
function openPopup(num) {
    currentWindow = num;
    // changing header of popup
    document.getElementById("popup-title").innerHTML = cards[num].getElementsByTagName("header")[0].textContent + " Overview";
    // styling popup based on card
    document.querySelector(".popup-window-content").classList.add(cards[num].classList[0]);
    // changing display from none to flex
    cardsDesc[num].style.display = "flex";
    document.querySelector(".popup-window").style.display = "flex";
}

// closes popup & removes styling
document.querySelector(".close").addEventListener("click", function() { closePopup(currentWindow); });
function closePopup(num) {
    // remove styling
    document.querySelector(".popup-window-content").classList.remove(cards[num].classList[0]);
    // display none
    cardsDesc[num].style.display = "none";
    document.querySelector(".popup-window").style.display = "none";
}