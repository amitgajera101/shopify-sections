document.addEventListener("DOMContentLoaded", () => {
  
  var testimonialSwiper = new Swiper(".testimonial-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".testimonial-pagination",
      clickable: true,
    },
  });

  var brandSwiper = new Swiper(".brand-list-slider", {
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    freeMode: true,
    speed: 6500,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  
  
});
