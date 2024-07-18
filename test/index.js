document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function slide(index) {
        const slidesContainer = document.querySelector('.slides');
        const slideWidth = slides[0].clientWidth;
        slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        slide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Change slide for every 3 seconds
});
