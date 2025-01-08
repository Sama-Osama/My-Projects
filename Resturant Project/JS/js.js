// Slider

let currentIndex = 0;
const slides = document.getElementById('slides');
const slideElements = document.querySelectorAll('.slide');
const totalSlides = slideElements.length;

const firstSlide = slideElements[0].cloneNode(true);
slides.appendChild(firstSlide);

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % (totalSlides + 1);

    if (currentIndex === totalSlides) {
        slides.style.transition = 'none';

        currentIndex = 0;
        updateSliderPosition();

        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
    } else {
        updateSliderPosition();
    }
}

function updateSliderPosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => {
    nextSlide();
}, 3000);




// Welcome

const welcomeContainer = document.querySelector('.welcome-container');

function checkScroll() {
    const rect = welcomeContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight * 0.8) {
        welcomeContainer.classList.add('visible');
    }
}

window.addEventListener('scroll', checkScroll);

checkScroll();




// Function to check if an element is in the viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the 'show' class when the element is in the viewport
function handleScroll() {
    const specialDishes = document.querySelector('.special-dishes');
    const dishes = document.querySelectorAll('.dish');

    if (isInViewport(specialDishes)) {
        specialDishes.classList.add('show');
    }

    dishes.forEach(dish => {
        if (isInViewport(dish)) {
            dish.classList.add('show');
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', handleScroll);

// Initial check in case the section is already visible
handleScroll();



