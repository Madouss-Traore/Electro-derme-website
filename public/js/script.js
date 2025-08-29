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
  loop: true,
  spaceBetween: 9,
  slidesPerView: 3, 
  centerSlides: "auto",



  navigation: {
    nextEl: '.reviews__swiper-button-next',
    prevEl: '.reviews__swiper-button-prev',
  },

  breakpoints: {
    100: {
      slidesPerView: 1,  
      spaceBetween: 3,
    },
    1100: {
      slidesPerView: 3,  
      spaceBetween: 9,
    },
  },
});


//FAQ

const video = document.querySelector(".faq__video");
const btn = document.querySelector(".video__button");

btn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    btn.textContent = "⏸"; 
  } else {
    video.pause();
    btn.textContent = "▶";  
  }
});

const faqs= document.querySelectorAll(".faq");
faqs.forEach(faq=>{
  faq.addEventListener("click", ()=>{
    faq.classList.toggle("active")
  })
})


