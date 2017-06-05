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

    $('.gallery').each(function () {
        var galleryTop = new Swiper($(this).find('.gallery-top'), {
            nextButton: $(this).find('.swiper-button-next'),
            prevButton: $(this).find('.swiper-button-prev'),
            spaceBetween: 10,
        });
        var galleryThumbs = new Swiper($(this).find('.gallery-thumbs'), {
            spaceBetween: 30,
            centeredSlides: true,
            slidesPerView: 'auto',
            touchRatio: 0.2,
            slideToClickedSlide: true
        });
        galleryTop.params.control = galleryThumbs;
        galleryThumbs.params.control = galleryTop;

    });

});
