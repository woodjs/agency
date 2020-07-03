$(document).ready(function () {
  $('.teams__list').slick({
    centerPadding: '42px',
    autoplay: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '555px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  // $('.reviews').slick();
   var mySwiper = new Swiper ('.swiper-container', {
     loop: true,
     autoplay: {
      delay: 3000
     },
     speed: 400
   });
  // Скролл
  $('a[href=\"#about-link\"]').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
    }
    return false;
  });
  $('a[href=\"#portfolio-link\"]').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
    }
    return false;
  });
  $('a[href=\"#services-link\"]').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
    }
    return false;
  });
  $('a[href=\"#teams-link\"]').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
    }
    return false;
  });
  $('a[href=\"#reviews-link\"]').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
    }
    return false;
  });
  $('a[href=\"#contact-link\"]').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
    }
    return false;
  });
  // добавляю класс к меню при скролле
});