async function loadTransition() {
    let words = [document.getElementById("name"), document.getElementById("presenting"), document.getElementById("placeholder")];
    for (let i=0; i<words.length; i++){
        if (i == words.length-1) {
            words[i].innerHTML = "";
            break;
        }
        words[i].classList.add("fadeToNone");
    }
    await sleep(4000);
    loadHomePage();
}

function loadHomePage() {
    document.getElementById("prezi").remove();

    let stars = document.createElement("div");
    stars.classList.add("stars");

    let twinkling = document.createElement("div");
    twinkling.classList.add("twinkling");

    let clouds = document.createElement("div");
    clouds.classList.add("clouds");

    let title = document.createElement("div");
    let text = document.createElement("h1");
    let textContent = document.createTextNode("HOMEPAGE");
    text.appendChild(textContent);
    title.appendChild(text);
    title.classList.add("title");

    let body = document.getElementById("root");
    
    body.appendChild(stars);
    body.appendChild(twinkling);
    body.appendChild(clouds);
    body.appendChild(title);
}