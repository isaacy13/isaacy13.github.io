// on mouse over event --> link to respective website overlay
let affil_cards = [".howdy-hack-card", ".aggie-coding-club-card", ".datathon-card", ".honors-card", ".fbhs-card", ".bsa-card"];
let affil_cards_hover = [".hh-hover", ".acc-hover", ".datathon-hover", ".honors-hover", ".fbhs-hover", ".bsa-hover"];
let affil_cards_info = [".hh-info", ".acc-info", ".datathon-info", ".honors-info", ".fbhs-info", ".bsa-info"];

for (let i = 0; i < affil_cards.length; i++) {
    document.addEventListener("mousemove", function() {
        try {
            var c = window.getComputedStyle(document.querySelector(affil_cards[i])).getPropertyValue("border-top-style");
        } catch { return; }

        if (c == "hidden") {
            document.querySelector(affil_cards_hover[i]).style.display = "block";
            document.querySelector(affil_cards_info[i]).style.display = "none";
        } else {
            document.querySelector(affil_cards_hover[i]).style.display = "none";
            document.querySelector(affil_cards_info[i]).style.display = "block";
        }
    }, false);
}

let tmp = document.querySelectorAll(".affil-card");

document.addEventListener("scroll", function() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

    if (vw < 550) {
        for (let i = 0; i < tmp.length; i++) {
            if (isElementInViewport(tmp[i])) { 
                tmp[i].style = "opacity: 1;";
            } else {
                tmp[i].style = "";
            }
        }
    }
}, false);

function isElementInViewport(el) {

    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}