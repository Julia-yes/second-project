const sliderButtons = document.querySelectorAll(".slider__button");
const slides = document.querySelectorAll(".review");
const arrowTop = document.querySelector(".slider__arrow_top");
const arrowBottom = document.querySelector(".slider__arrow_bottom");

let currentSlide = 0;

function render(index, slides, sliderButtons) {
    slides.forEach(function(slide, slidesIndex) {
        slide.classList.remove("visible");
    });
    slides[index].classList.add("visible");
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

arrowLeft.addEventListener('click', function() {
    if (currentSlide === 0) {
        currentSlide += (slides.length - 1);
    }
    else {
        currentSlide--;
    }
    render(currentSlide, slides, sliderButtons);
})

arrowRight.addEventListener('click', function() {
    if (currentSlide === (slides.length - 1)) {
        currentSlide -= (slides.length - 1);
    }
    else {
        currentSlide++;
    }
    render(currentSlide, slides, sliderButtons);
})