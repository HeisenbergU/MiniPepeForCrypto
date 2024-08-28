const videoContainer = document.getElementById('videoContainer');
const scrollRightButton = document.getElementById('scrollRight');
const scrollLeftButton = document.getElementById('scrollLeft');

let currentSlide = 0;

scrollRightButton.addEventListener('click', () => {
    const totalSlides = videoContainer.children.length;
    currentSlide = (currentSlide + 1) % totalSlides;
    videoContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
});

scrollLeftButton.addEventListener('click', () => {
    const totalSlides = videoContainer.children.length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    videoContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
});
