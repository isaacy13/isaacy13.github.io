// set a listener on skip button
let skipButton = document.getElementById("skipButton").addEventListener("click", skipAnimation);

// Skips animation on button press
function skipAnimation() {
    loadHomePage();
}


// Fades all words' opacity to 0 & loads starry sky homepage
async function loadTransition() {
    let words = [document.getElementById("name"), document.getElementById("presenting"), document.getElementById("placeholder")];
    for (let i=0; i<words.length; i++){
        if (i == words.length-1) {
            document.getElementById("placeholder").style.visibility = "hidden";
            break;
        }
        words[i].classList.add("fadeToNone");
    }
    document.getElementById("skipButton").classList.add("fadeSkipButton");
    await sleep(3200);
    loadHomePage();
}

// loads starry sky homepage
function loadHomePage() {
    // get rid of previous "presentation" stuff from page
    document.getElementById("prezi").remove();
    document.getElementById("homepage").style = "";
}