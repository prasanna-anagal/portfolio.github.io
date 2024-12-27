// Carousel functionality
let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;

// Function to show the active item
function showCarouselItem(index) {
  carouselItems.forEach((item, i) => {
    item.classList.remove('active');
    if (i === index) {
      item.classList.add('active');
    }
  });
}

// Initialize carousel with the first item active
showCarouselItem(currentIndex);

// Next Button Action
document.querySelector('.carousel-next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems; // Go to next item, loop around
  showCarouselItem(currentIndex);
});

// Previous Button Action
document.querySelector('.carousel-prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Go to previous item, loop around
  showCarouselItem(currentIndex);
});
