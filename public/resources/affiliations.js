// on mouse over event --> link to respective website overlay
let affil_cards = [".howdy-hack-card", ".aggie-coding-club-card", ".datathon-card", ".honors-card", ".fbhs-card", ".bsa-card"];
let affil_cards_hover = [".hh-hover", ".acc-hover", ".datathon-hover", ".honors-hover", ".fbhs-hover", ".bsa-hover"];
let affil_cards_info = [".hh-info", ".acc-info", ".datathon-info", ".honors-info", ".fbhs-info", ".bsa-info"];

for (let i = 0; i < affil_cards.length; i++) {
    document.addEventListener("mousemove", function() {
        var c = window.getComputedStyle(document.querySelector(affil_cards[i])).getPropertyValue("border-top-style");

        if (c == "hidden") {
            document.querySelector(affil_cards_hover[i]).style.display = "block";
            document.querySelector(affil_cards_info[i]).style.display = "none";
        } else {
            document.querySelector(affil_cards_hover[i]).style.display = "none";
            document.querySelector(affil_cards_info[i]).style.display = "block";
        }
    }, false);
}