const sliderButtons = document.querySelectorAll(".slider__button");
const slides = document.querySelectorAll(".review");
const arrowTop = document.querySelector(".slider__arrow_top");
const arrowBottom = document.querySelector(".slider__arrow_bottom");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__items");

let currentSlide = 0;

function render(index, slides, sliderButtons) {
    slides.forEach(function(slide, slidesIndex) {
        slide.classList.remove("first");
    });
    slides[index].classList.add("first");
    sliderButtons.forEach(function(sliderButton, sliderButtonIndex) {
        sliderButton.classList.remove("slider__button_active");
    });
    sliderButtons[index].classList.add("slider__button_active");
}

sliderButtons.forEach(function(sliderButton, sliderButtonIndex) {
    sliderButton.addEventListener('click', function() {
        currentSlide = sliderButtonIndex;
        render(currentSlide, slides, sliderButtons)
    });
});

arrowBottom.addEventListener('click', function() {
    if (currentSlide === 0) {
        currentSlide += (slides.length - 1);
    }
    else {
        currentSlide--;
    }
    render(currentSlide, slides, sliderButtons);
})

arrowTop.addEventListener('click', function() {
    if (currentSlide === (slides.length - 1)) {
        currentSlide -= (slides.length - 1);
    }
    else {
        currentSlide++;
    }
    render(currentSlide, slides, sliderButtons);
})

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle("hamburger_close");
    nav.classList.toggle("nav_phone");
})