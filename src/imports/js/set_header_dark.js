$(document).scroll(() => {
  const height = $('.head-section').height();
  if (height) {
    if ($('header').offset().top > height - 0.2 * height) {
      $('header').removeClass('transparent');
      $('header .nav-item-block.transparent').removeClass('transparent');
    } else {
      $('header').addClass('transparent');
      $('header .nav-item-block.transparent').addClass('transparent');
    }
  }
});
