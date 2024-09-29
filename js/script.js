let currentIndex = 0;
const images = document.querySelectorAll('.slideshow-image');
let autoSlideInterval = setInterval(nextSlide, 4000); // Slide every 4 seconds

function showNextImage(index) {
    const currentImage = images[currentIndex];
    currentIndex = (index !== undefined ? index : (currentIndex + 1)) % images.length;
    const nextImage = images[currentIndex];

    currentImage.classList.remove('slide-in');
    currentImage.classList.add('slide-out');

    nextImage.classList.remove('slide-out');
    nextImage.classList.add('slide-in');

    setTimeout(() => {
        currentImage.style.opacity = 0; // Ensure the old image is hidden
        nextImage.style.opacity = 1; // Show the next image
    }, 2000); // Adjust timing to match the animation
}

function prevSlide() {
    resetAutoSlide(); // Reset auto slide timer when manually changed
    showNextImage((currentIndex - 1 + images.length) % images.length);
}

function nextSlide() {
    resetAutoSlide(); // Reset auto slide timer when manually changed
    showNextImage();
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 4000); // Restart the auto slide timer
}
