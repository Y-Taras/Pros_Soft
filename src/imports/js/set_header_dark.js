$(document).scroll(() => {
  const height = $('.head-section').height();
  if (height) {
    if ($('header').offset().top > 1) {
      $('header').removeClass('transparent');
      $('header .nav-item-block').removeClass('transparent');
    } else {
      $('header').addClass('transparent');
      $('header .nav-item-block').addClass('transparent');
    }
  }
});
