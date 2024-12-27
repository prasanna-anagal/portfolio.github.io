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


// Accordion Functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const content = item.querySelector('.accordion-content');

    // Close any other active accordion
    document.querySelectorAll('.accordion-item.active').forEach(activeItem => {
      if (activeItem !== item) {
        activeItem.classList.remove('active');
        activeItem.querySelector('.accordion-content').style.display = 'none';
      }
    });

    // Toggle the clicked accordion
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      content.style.display = 'none';
    } else {
      item.classList.add('active');
      content.style.display = 'block';
    }
  });
});
