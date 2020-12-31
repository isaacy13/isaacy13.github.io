// array of planets
let planet_index = 0;
let planets = ["resources/saturn.png", "resources/blue.png", "resources/moon.png", "resources/orange.png", "resources/sandy.png", "resources/sun.png", "resources/tan.png"];

// editable image
let planet_img = document.getElementById("planet-img");

// onClick listeners
let leftButton = document.getElementById("leftButton").addEventListener("click", left);
let rightButton = document.getElementById("rightButton").addEventListener("click", right);

function left() {
    if (planet_index != 0)
        planet_index--;

    planet_img.src = planets[planet_index];
}

function right() {
    if (planet_index != (planets.length - 1))
        planet_index++;

    planet_img.src = planets[planet_index];
}
