$(document).scroll(() => {
  const height = $('.head-section').height();
  if (height) {
    if ($('header').offset().top > height - 0.2 * height) {
      $('header').removeClass('transparent');
    } else $('header').addClass('transparent');
  }
});
