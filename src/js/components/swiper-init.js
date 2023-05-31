document.addEventListener("DOMContentLoaded", () => {
  const mainPageSwiper = new Swiper(".main-swiper", {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 51,
    centeredSlides: true,
    direction: "horizontal",
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      10: {
        slidesPerView: "auto",
        spaceBetween: 10,
        centeredSlides: false,
        navigation: {
          enabled: false,
        },
      },
      // when window width is >= 480px
      401: {
        slidesPerView: 3,
        spaceBetween: 51,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".carusel-next",
      prevEl: ".carusel-prev",
    },
  });

  const slider4060 = new Swiper(".slider_4060", {
    // Optional parameters
    slidesPerView: "auto",
    slidesPerGroup: 2,
    spaceBetween: 50,
    centeredSlides: false,
    direction: "horizontal",
    loop: true,

    breakpoints: {
      // when window width is >= 320px
      10: {
        slidesPerView: "auto",
        spaceBetween: 10,
        centeredSlides: false,
        navigation: {
          enabled: false,
        },
      },
      // when window width is >= 480px
      401: {
        slidesPerView: "auto",
        spaceBetween: 50,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".carusel-next",
      prevEl: ".carusel-prev",
    },
  });

  // *** SLIDER 60*40 ***
  const slider6040 = new Swiper(".slider_6040", {
    // Optional parameters
    slidesPerView: "auto",
    slidesPerGroup: 2,
    spaceBetween: 50,
    centeredSlides: false,
    direction: "horizontal",
    loop: true,

    breakpoints: {
      // when window width is >= 320px
      10: {
        slidesPerView: "auto",
        spaceBetween: 10,
        centeredSlides: false,
        navigation: {
          enabled: false,
        },
      },
      // when window width is >= 480px
      401: {
        slidesPerView: "auto",
        spaceBetween: 50,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".carusel-next",
      prevEl: ".carusel-prev",
    },
  });

  // bottom slider
  const basicSwiper = new Swiper(".basic-swiper", {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 51,
    centeredSlides: true,
    direction: "horizontal",
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      10: {
        slidesPerView: "auto",
        spaceBetween: 10,
        centeredSlides: false,
        navigation: {
          enabled: false,
        },
      },
      // when window width is >= 480px
      401: {
        slidesPerView: 3,
        spaceBetween: 51,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".carusel-next",
      prevEl: ".carusel-prev",
    },
  });

  // shop slider
  const slider4products = new Swiper(".slider_4products", {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 49,
    centeredSlides: false,
    direction: "horizontal",
    loop: "infinite",

    // autoplay: {
    //   delay: 100,
    //   disableOnInteraction: false,
    // },

    breakpoints: {
      // when window width is >= 320px
      10: {
        slidesPerView: "auto",
        spaceBetween: 14,
        centeredSlides: false,
        navigation: {
          enabled: false,
        },
      },
      // when window width is >= 480px
      401: {
        slidesPerView: 4,
        spaceBetween: 49,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".carusel-next",
      prevEl: ".carusel-prev",
    },
  });
});
