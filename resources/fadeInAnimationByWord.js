/* Add a loading animation tag & remove after 5 seconds (aka after animation finishes loading) */
async function tag() {
    document.body.classList.add("fadeInAnimation-loading");
    await sleep(5000);
    document.body.classList.remove("fadeInAnimation-loading");
}

/* Sleep for a set amount of time */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* Calling tag function */
tag();