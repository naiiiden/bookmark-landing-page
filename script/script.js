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

const form = document.getElementsByTagName("form")[0];
const email = document.getElementById("email");
const error = document.querySelector(".error");

email.addEventListener("input", function (event) {
    if (email.validity.valid) {
        error.textContent = "";
        error.className = "error";
        document.querySelector(".icon_error").style.display = "none";
        document.getElementById("email_container").style.background = "#5368df";
    } else {
        showError;
    }
});

form.addEventListener("submit", function (event) {
    if (!email.validity.valid) {
        showError();
    }
    event.preventDefault();
});

function showError() {
    if (email.validity.valueMissing) {
        error.textContent = "You need to enter an email address";
        document.getElementById("email_container").style.background = "#fa5757";
        document.querySelector(".icon_error").style.display = "block";
    } else if (email.validity.typeMismatch) {
        error.textContent = "Whoops, make sure it's an email";
        document.getElementById("email_container").style.background = "#fa5757";
        document.querySelector(".icon_error").style.display = "block";

    }
    error.className = "error";
}