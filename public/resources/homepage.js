// avoids breaking website... (some event listeners & stuff doesn't work if you don't reload)
window.onhashchange = function(event) {
    location.reload();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// list of clickable cards
let cards = document.querySelectorAll(".card");

// auto scroll to top on refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// animate card fly in
let cardsAnimated = [];
for (let i = 0; i < cards.length; i++)
    cardsAnimated.push(false);

for (let i = 0; i < cards.length; i++) {
    if (!isInViewport(cards[i]) && !cardsAnimated[i])
        cards[i].classList.add("hideCard");
    else if (isInViewport(cards[i]) && !cardsAnimated[i]) {
        cardsAnimated[i] = true;
        cards[i].classList.add("cardFlyIn");
    }
}

for (let i = 0; i < cards.length; i++) {
    window.addEventListener("scroll", function() {
        if (isInViewport(cards[i]) && !cardsAnimated[i]) {
            cardsAnimated[i] = true;
            cards[i].classList.add("cardFlyIn");
        }
    });
}

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
}

// set onclick listeners for cards
for (let i = 0; i < cards.length; i++)
    cards[i].addEventListener("click", function() { cardFlyOut(cards, i) });

async function cardFlyOut(cards, num) {
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("cardFlyIn");
        cards[i].classList.add("cardFlyOut");
    }
    
    document.getElementsByTagName("footer")[0].classList.remove("fadeIn");
    document.getElementsByTagName("footer")[0].classList.add("fadeOut");

    document.getElementById("decorations").classList.remove("fadeIn");
    document.getElementById("decorations").classList.add("fadeOut");

    document.querySelector(".page-header").classList.remove("fadeIn");
    document.querySelector(".page-header").classList.add("fadeOut");

    document.querySelector(".about-me-card").classList.add("cardFlyOut");
    // wait for animation to finish
    await sleep(950);

    // redirect router
    switch(num) {
        case 0: window.location.href = "/#/projects";
                break;

        case 1: window.location.href = "/#/interests";
                break;

        case 2: window.location.href = "/#/experiences";
                break;

        case 3: window.location.href = "/#/awards";
                break;

        case 4: window.location.href = "/#/affiliations";
                break;

        case 5: window.location.href = "/#/goals";
                break;
    }

}