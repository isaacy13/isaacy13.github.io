// get a list of words to animate
let toAnimateList = document.querySelectorAll('.flyInAnimationByLetter');

// for each of those words...
for (let i = 0; i < toAnimateList.length; i++) {
    // 1. grab the text
    let text = toAnimateList[i]; 
    let textArr = text.textContent.split("");
    // 2. get rid of soon-to-be duplicate
    text.textContent = "";
    
    // 3. create a duplicate (now the only one) in the form of "spans"... also add padding b/w letters with space in b/w
    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i+1] == ' ')
            text.innerHTML += "<span style='padding-right:10px'>" + textArr[i] + "</span>";
        else if (textArr[i-1] == ' ')
            text.innerHTML += "<span style='padding-left:10px'>" + textArr[i] + "</span>";
        else
            text.innerHTML += "<span>" + textArr[i] + "</span>";

    }
}

// redefine animate list to everything with the tag "span"
let spanList = document.querySelectorAll('span');
// animate a letter every 250 ms, (have these variables global)
let timer = setInterval(animateLetter, 250); /*** TIME INTERVAL EDIT HERE ***/
let iter = 0;

// adds the animation CSS tag to each span
function animateLetter () {
    spanList[iter].classList.add('textFlyInAnimationByLetter');
    iter++;
    if (iter == spanList.length) {
        finish();
        return;
    }
}

// clears timer
function finish() {
    clearInterval(timer);
    timer = null;
}