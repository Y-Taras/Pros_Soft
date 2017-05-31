$(document).ready(function(){
  $('.fancybox').fancybox();


    var swiper = new Swiper('.rewards-swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 2,
        slidesPerView: 5,
        mousewheelControl: true,
        coverflow: {
          rotate: 0,
          stretch: 0,
          depth: 125,
          modifier: 1,
          slideShadows : false
        },
        breakpoints: {
          640: {
              slidesPerView: 3
          }
        }
    });

});
