// homepage interaction with cards
let projectsCard = document.querySelector(".projects-card");
projectsCard.addEventListener("click", card1);
let projectsCardOpen = false;
let projectsCardList = document.querySelector(".projects-card-list");

let skillsInterestsCard = document.querySelector(".skills-interests-card");
skillsInterestsCard.addEventListener("click", card2);
let skillsInterestsCardOpen = false;
let skillsInterestsList = document.querySelector(".skills-interests-card-list");

let educationCard = document.querySelector(".education-card");
educationCard.addEventListener("click", card3);
let educationCardOpen = false;
let educationCardList = document.querySelector(".education-card-list");

let achievementsAwardsCard = document.querySelector(".achievements-awards-card");
achievementsAwardsCard.addEventListener("click", card4);
let achievementsAwardsCardOpen = false;
let achievementsAwardsCardList = document.querySelector(".achievements-awards-card-list");

// open or close projects card
function card1() {
    if (!projectsCardOpen) {
        projectsCardOpen = true;
        projectsCard.classList.add("projects-card-expanded");
        projectsCardList.style = "";
    } else {
        projectsCardOpen = false;
        projectsCard.classList.remove("projects-card-expanded");
        projectsCardList.style = "display: none";
    }
}

function card2() {
    if (!skillsInterestsCardOpen) {
        skillsInterestsCardOpen = true;
        skillsInterestsCard.classList.add("skills-interests-card-expanded");
        skillsInterestsList.style = "";
    } else {
        skillsInterestsCardOpen = false;
        skillsInterestsCard.classList.remove("skills-interests-card-expanded");
        skillsInterestsList.style = "display: none";
    }
}

function card3() {
    if (!educationCardOpen) {
        educationCardOpen = true;
        educationCard.classList.add("skills-interests-card-expanded");
        educationCardList.style = "";
    } else {
        educationCardOpen = false;
        educationCard.classList.remove("skills-interests-card-expanded");
        educationCardList.style = "display: none";
    }
}

function card4() {
    if (!achievementsAwardsCardOpen) {
        achievementsAwardsCardOpen = true;
        achievementsAwardsCard.classList.add("skills-interests-card-expanded");
        achievementsAwardsCardList.style = "";
    } else {
        achievementsAwardsCardOpen = false;
        achievementsAwardsCard.classList.remove("skills-interests-card-expanded");
        achievementsAwardsCardList.style = "display: none";
    }
}