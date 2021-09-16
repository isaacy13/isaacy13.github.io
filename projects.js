function showMore(content, button) {
    var more = document.getElementById(content);

    if (more.style.display == '') // first-time only case
        more.style.display = 'none';
    
    if (more.style.display != 'none') {
        more.style.display = 'none';
        document.getElementById(button).innerHTML = "Read More";
    }
    else {
        more.style.display = 'contents';
        document.getElementById(button).innerHTML = "Read Less";
    }
}