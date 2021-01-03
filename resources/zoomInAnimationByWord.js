/* wait for "presenting" animation to finish */
waitForFinish();

function waitForFinish() {
    let tmpID = document.getElementById("presenting")
    let tmp = window.getComputedStyle(tmpID).getPropertyValue("opacity");
    if (tmp == 1) {
        animation3();
        return;
    }
    else
        setTimeout(waitForFinish, 100);
}

/* then, do the next animation */
async function animation3 () {
    let wordBank = ["a passion", "inspired projects", "an experience"];
    for (let i=0; i < wordBank.length; i++) {
        let placeholder = document.getElementById("placeholder");
        placeholder.innerHTML = wordBank[i];
        if (i == 0)
            placeholder.classList.add("zoomInAnimationByWordL");
        else if (i == 1)
            placeholder.classList.add("zoomInAnimationByWordM");
        else if (i == 2)
            placeholder.classList.add("zoomInAnimationByWordR");

        await sleep(2600);

        // after done with "loading screen", do transition to actual website
        if (i == 2)
            loadTransition();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}