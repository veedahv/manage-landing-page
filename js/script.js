

    let links = document.getElementsByClassName("nav-links")[0];
    let close = document.getElementsByClassName("close")[0];
    let hamburger = document.getElementsByClassName("hamburger")[0];

function hamburg() {

    // if (links.style.display === "block") {
    //     links.style.display = "none";
    // } else {
    //     links.style.display = "block";
    // }

    // if (close.style.display === "block") {
    //     close.style.display = "none"
    // } else {
    //     close.style.display = "block"
    // }    
    

    links.classList.toggle("toggle");
    close.classList.toggle("hamburger");
    hamburger.classList.toggle("burger");
}

function cancel() {

    // if (links.style.display === "block") {
    //     links.style.display = "none";
    // } else {
    //     links.style.display = "block";
    // }

    // if (close.style.display === "block") {
    //     close.style.display = "none"
    // } else {
    //     close.style.display = "block"
    // }    

    links.classList.toggle("burger");
    close.classList.toggle("close");
    hamburger.classList.toggle("hamburger");
}