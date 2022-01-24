document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav-ul").classList.toggle("show");
    
    if (document.getElementById("menu-icon").getAttribute("src") === "images/icon-hamburger.svg") {
        document.getElementById("menu-icon").setAttribute("src", "images/icon-close.svg");
    } else {
        document.getElementById("menu-icon").setAttribute("src", "images/icon-hamburger.svg");
    }
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides (n) {
    let slides = document.getElementsByClassName("slide");
    let buttons = document.getElementsByClassName("button");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    buttons[slideIndex-1].className += " active";
}