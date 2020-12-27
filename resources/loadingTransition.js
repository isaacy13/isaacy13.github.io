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

    // create a div "stars" & style it "stars"
    let stars = document.createElement("div");
    stars.classList.add("stars");

    // create a div "twinking" & style it "twinkling"
    let twinkling = document.createElement("div");
    twinkling.classList.add("twinkling");

    // create a div "clouds" & style it "clouds"
    let clouds = document.createElement("div");
    clouds.classList.add("clouds");
    
    // create a div "title"
    let title = document.createElement("div");
    let text = document.createElement("h1");
    let textContent = document.createTextNode("HOMEPAGE");
    text.appendChild(textContent);
    title.appendChild(text);
    text.style = "font-size: 8vh;";
    title.classList.add("title");

    let body = document.getElementById("root");
    
    // add created divs into body
    body.appendChild(stars);
    body.appendChild(twinkling);
    body.appendChild(clouds);
    body.appendChild(title);

    // solar system of planets
    let solarSystem = document.createElement("div");

    // planets in solar system
    let planet1 = document.createElement("img");
    planet1.src = "resources/orange.png";
    planet1.classList.add("planets");

    let planet2 = document.createElement("img");
    planet2.src = "resources/saturn.png";
    planet2.classList.add("planets");

    let planet3 = document.createElement("img");
    planet3.src = "resources/tan.png";
    planet3.classList.add("planets");

    // add planets in solar system
    solarSystem.append(planet1);
    solarSystem.append(planet2);
    solarSystem.append(planet3);

    // add sun in solar system
    let sun = document.createElement("img");
    sun.src = "resources/sun.png";
    sun.classList.add("sun");
    solarSystem.append(sun);

    // add solar system to page
    body.append(solarSystem);

    // create a footer
    let footer = document.createElement("footer");

    /* add footer icon links */
    // LinkedIn
    let LinkedInLink = document.createElement("a");
    LinkedInLink.classList.add("footerContent");
    LinkedInLink.href = "https://www.linkedin.com/in/isaac-yeang/";
    LinkedInLink.id = "LinkedIn-Logo";
    
    let LinkedInIcon = document.createElement("img");
    LinkedInIcon.src = "resources/linkedin.png";
    LinkedInIcon.title = "Connect with me on LinkedIn";
    LinkedInIcon.alt = "LinkedIn Link";

    LinkedInLink.appendChild(LinkedInIcon);
    
    // Github
    let GithubLink = document.createElement("a");
    GithubLink.classList.add("footerContent");
    GithubLink.href = "https://github.com/isaacy13/";
    GithubLink.id = "Github-Logo";
    
    let GithubIcon = document.createElement("img");
    GithubIcon.src = "resources/github.png";
    GithubIcon.title = "Check out my Github";
    GithubIcon.alt = "Github Link";

    GithubLink.appendChild(GithubIcon);

    // Email
    let EmailLink = document.createElement("a");
    EmailLink.classList.add("footerContent");
    EmailLink.href = "mailto:isaac.yeang@aggienetwork.com";
    EmailLink.id = "Gmail-Logo";

    let EmailIcon = document.createElement("img");
    EmailIcon.src = "resources/gmail.png";
    EmailIcon.title = "Email me";
    EmailIcon.alt = "Email Link";

    EmailLink.appendChild(EmailIcon);
    
    // append links to footer
    footer.append(EmailLink);
    footer.append(GithubLink);
    footer.append(LinkedInLink);

    // add footer to body
    body.appendChild(footer);
    
    /*
        <div class="stars"></div>
        <div class="twinkling"></div>
        <div class="clouds"></div>
        <div style="title">
            <h1>HOMEPAGE</h1>
        </div>
        <br>

        <footer class="footer">
        </footer>
    */
}