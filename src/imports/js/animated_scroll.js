$().ready(() => {
  $('.scroll-down').click(() => {
    $('html, body').animate({
      scrollTop: $($(".block-container")[0]).offset().top - 65
    }, 1000);
  });
  // $('.footer-logo-text').click(() => {
  //   $('html, body').animate({
  //     scrollTop: 0
  //   }, 1000);
  // });
});