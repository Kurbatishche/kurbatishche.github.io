const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const menuLinks = document.querySelectorAll(".menu__link--js");

burger.addEventListener("click", function () {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

overlay.addEventListener("click", function () {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    menu.classList.remove("active");
    burger.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});

const testimonialsSlider = new Swiper(".testimonials__slider", {
  speed: 400,
  spaceBetween: 30,
  /* slidesPerView: 3.4, */
  centeredSlides: true,
  loop: true,
  // slidesPerGroup: 2,
  // slidesOffsetAfter: 300,
  // slidesOffsetBefore: 275,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    2400: {
      slidesPerView: 4.4,
    },
    1900: {
      slidesPerView: 3.9,
    },
    1800: {
      slidesPerView: 3.7,
    },
    1700: {
      slidesPerView: 3.5,
    },
    1600: {
      slidesPerView: 3.3,
    },
    1400: {
      slidesPerView: 2.8,
      slidesOffsetBefore: 270,
    },
    1200: {
      slidesPerView: 2.3,
    },
    /* 1100: {
      slidesPerView: 2.1,
    },
    900: {
      slidesPerView: 1.9,
    }, */
    800: {
      slidesPerView: 1.6,
    },
    600: {
      slidesPerView: 1.3,
    },
    320: {
      slidesPerView: 1,
      slidesOffsetBefore: 0,
    },
  },
});

//hw

const newsSlider = new Swiper(".news__slider", {
  speed: 400,
  spaceBetween: 30,
  // slidesPerView: 2.4,
  centeredSlides: true,
  loop: true,
  // slidesPerGroup: 2,
  // slidesOffsetAfter: 300,
  // slidesOffsetBefore: 275,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    2400: {
      slidesPerView: 3.35,
    },
    2000: {
      slidesPerView: 2.8,
    },
    1700: {
      slidesPerView: 2.4,
    },
    1400: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 1.5,
    },
    600: {
      slidesPerView: 1.2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

/* const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 100,
}); */
