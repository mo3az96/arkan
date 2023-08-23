$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  /************************************ Fixed Header ************************************/
  if ($(window).width() <= 1199) {
    $(".menu-btn").click(function (e) {
      $(".overlay").fadeIn(500);
      $(".header-nav").addClass("active");
      $("body").addClass("overflow");
    });
    $(".menu-close,.overlay").click(function (e) {
      $(".overlay").fadeOut(500);
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
    });
    $(".header-list>li>a").click(function (e) {
      if ($(this).siblings("ul").length) {
        e.preventDefault();
        e.stopPropagation();
        $(".header-list>li>a").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css("display") == "none") {
          $(this).siblings().slideDown(500);
        } else {
          $(this).siblings().slideUp(500);
        }
        $(".header-list>li>a").not(this).siblings().slideUp(500);
      }
    });
  }
  /************************************ Fixed Header ************************************/
  if ($(this).scrollTop() >= 100) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
  /************************************ Main Slider ************************************/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    a11y: {
      enabled: false,
    },
    spaceBetween: 10,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    effect: "fade",
    navigation: {
      nextEl: ".main-slider .swiper-button-next",
      prevEl: ".main-slider .swiper-button-prev",
    },
  });

  /************************************ Scroll Button ************************************/
  $(".scroll-btn").on("click", function (e) {
    $(document).off("scroll");
    var target = $(this).attr("data-href");
    menu = target;
    $target = $(target);
    $("html, body").stop().animate(
      {
        scrollTop: $target.offset().top,
      },
      500,
      "swing"
    );
  });
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  /************************************ Services Slider ************************************/
  var servicesSwiper = new Swiper(".services-slider .swiper", {
    a11y: {
      enabled: false,
    },
    loop: true,

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
        centeredSlides: false,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
        centeredSlides: true,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 31,
        centeredSlides: true,
      },
    },
    pagination: {
      el: ".services-slider .swiper-pagination",
      clickable: true,
    },
  });
  /************************************ Projects Slider ************************************/
  var projectsSwiper = new Swiper(".projects-slider .swiper", {
    a11y: {
      enabled: false,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 2.17175,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".projects-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".projects-section .swiper-btn-next",
      prevEl: ".projects-section .swiper-btn-prev",
    },
  });
  /************************************ Clients Slider ************************************/
  var clientsSwiper = new Swiper(".clients-slider .swiper", {
    a11y: {
      enabled: false,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1199: {
        slidesPerView: 6,
        spaceBetween: 24,
      },
    },
    pagination: {
      el: ".clients-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".clients-slider .swiper-button-next",
      prevEl: ".clients-slider .swiper-button-prev",
    },
  });
  /************************************ News Slider ************************************/
  var newsSwiper = new Swiper(".news-slider .swiper", {
    a11y: {
      enabled: false,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".news-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".news-slider .swiper-button-next",
      prevEl: ".news-slider .swiper-button-prev",
    },
  });
  /************************************ About ************************************/
  if ($(".about-section").length) {
    var a = 0;
    $(window).scroll(function () {
      if (
        a == 0 &&
        $(this).scrollTop() >= $(".about-section").offset().top + 50
      ) {
        $(".state-item .value span").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 1000,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        });
        a++;
      }
    });
  }
  /************************************ Footer ************************************/
  if ($(window).width() <= 767) {
    $(".footer-list-title").click(function () {
      $(".footer-list-title").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".footer-list-title").not(this).siblings().slideUp(500);
    });
  }
});
