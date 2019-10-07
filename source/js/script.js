(function() {
  "use strict";
  var toggles = document.querySelectorAll('.menu-open');
  var open = document.querySelector('.menu__hidden');
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener("click", function(e) {
      e.preventDefault();
      open.classList.toggle('menu-hide');
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
    });
  }
})();

$('.service__sliders').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.doctors__slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.side-bar__link').click(function() {
  $(this).addClass('side-bar__link--active');
  $('.side-bar__link').not(this).removeClass('side-bar__link--active');
});

$('.help__button').click(function(e) {
  e.preventDefault();
  $('.modal').addClass('modal__show');
});

$('.doctors__link').click(function(e) {
  e.preventDefault();
  $('.modal').addClass('modal__show');
});

$('.menu__call').click(function(e) {
  e.preventDefault();
  $('.modal').addClass('modal__show');
});

$('.trust__link').click(function(e) {
  e.preventDefault();
  $('.modal').addClass('modal__show');
});

$('.modal__close').click(function(e) {
  e.preventDefault();
  $('.modal').removeClass('modal__show');
});

jQuery(function($) {
  $("#phone").mask("+7(999) 999-99-99");
});

$("#mail").blur(function() {
  var email = $(this).val();
  var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
});
