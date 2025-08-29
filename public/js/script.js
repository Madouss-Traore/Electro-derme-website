// initialize swiper before/after
const swiper = new Swiper('.swiper', {
  // Optional parameters
  
  loop: true,
  spaceBetween: 15,
 

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



//initialize swiper comments

const reviewsSwiper = new Swiper('.reviews', {
  // Optional parameters

  loop: true, 
   spaceBetween: 9,  
  slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__swiper-button-next',
    prevEl: '.reviews__swiper-button-prev',
  },

});

