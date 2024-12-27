/*
// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
*/
// Carousel functionality
let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;

function showCarouselItem(index) {
  carouselItems.forEach((item, i) => {
    item.classList.remove('active');
    if (i === index) {
      item.classList.add('active');
    }
  });
}

document.querySelector('.carousel-next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems;
  showCarouselItem(currentIndex);
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  showCarouselItem(currentIndex);
});

showCarouselItem(currentIndex);
