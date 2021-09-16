function loadAnimation() {
    var loadAnimationBool = localStorage.getItem("animation");
    
    if (loadAnimationBool == null) {
        localStorage.setItem("animation", false);
    }

    if (loadAnimationBool == "true") {
        // load animation
        document.body.classList.add("animateBody");
        document.getElementById("animationText").innerHTML = "Disable Animations";
    } else {
        // remove animation
        document.body.classList.remove("animateBody");
        document.getElementById("animationText").innerHTML = "Enable Animations";
    }
}

function changeAnimationSetting() {
    var loadAnimationBool = localStorage.getItem("animation");
    
    if (loadAnimationBool == "true") {
        localStorage.setItem("animation", false);
        document.getElementById("animationText").innerHTML = "Enable Animations";
    }

    else {
        localStorage.setItem("animation", true);
        document.getElementById("animationText").innerHTML = "Disable Animations";
    }

    loadAnimation();
}