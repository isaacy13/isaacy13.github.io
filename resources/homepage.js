// homepage interaction with cards
let projectsCard = document.querySelector(".projects-card");
projectsCard.addEventListener("click", card1);
let projectsCardOpen = false;
let projectsCardDesc = document.querySelector(".projects-card-desc");
let projectsCardList = document.querySelector(".projects-card-list");

let skillsInterestsCard = document.querySelector(".skills-interests-card");
skillsInterestsCard.addEventListener("click", card2);
let skillsInterestsCardOpen = false;
let skillsInterestsDesc = document.querySelector(".skills-interests-card-desc");
let skillsInterestsList = document.querySelector(".skills-interests-card-list");

let educationCard = document.querySelector(".education-card");
educationCard.addEventListener("click", card3);
let educationCardOpen = false;
let educationCardDesc = document.querySelector(".education-card-desc");
let educationCardList = document.querySelector(".education-card-list");

let achievementsAwardsCard = document.querySelector(".achievements-awards-card");
achievementsAwardsCard.addEventListener("click", card4);
let achievementsAwardsCardOpen = false;
let achievementsAwardsDesc = document.querySelector(".achievements-awards-card-desc");
let achievementsAwardsCardList = document.querySelector(".achievements-awards-card-list");

// open or close projects card
function card1() {
    if (!projectsCardOpen) {
        projectsCardOpen = true;
        projectsCard.classList.add("projects-card-expanded");
        projectsCardDesc.style = "display: none";
        projectsCardList.style = "";
    } else {
        projectsCardOpen = false;
        projectsCard.classList.remove("projects-card-expanded");
        projectsCardList.style = "display: none";
        projectsCardDesc.style = "";
    }
}

function card2() {
    if (!skillsInterestsCardOpen) {
        skillsInterestsCardOpen = true;
        skillsInterestsCard.classList.add("skills-interests-card-expanded");
        skillsInterestsList.style = "";
        skillsInterestsDesc.style = "display: none";
    } else {
        skillsInterestsCardOpen = false;
        skillsInterestsCard.classList.remove("skills-interests-card-expanded");
        skillsInterestsList.style = "display: none";
        skillsInterestsDesc.style = "";
    }
}

function card3() {
    if (!educationCardOpen) {
        educationCardOpen = true;
        educationCard.classList.add("skills-interests-card-expanded");
        educationCardList.style = "";
        educationCardDesc.style = "display: none";
    } else {
        educationCardOpen = false;
        educationCard.classList.remove("skills-interests-card-expanded");
        educationCardList.style = "display: none";
        educationCardDesc.style = "";
    }
}

function card4() {
    if (!achievementsAwardsCardOpen) {
        achievementsAwardsCardOpen = true;
        achievementsAwardsCard.classList.add("skills-interests-card-expanded");
        achievementsAwardsCardList.style = "";
        achievementsAwardsDesc.style = "display: none";
    } else {
        achievementsAwardsCardOpen = false;
        achievementsAwardsCard.classList.remove("skills-interests-card-expanded");
        achievementsAwardsCardList.style = "display: none";
        achievementsAwardsDesc.style = "";
    }
}