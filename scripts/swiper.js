const swiper = new Swiper(".swiper1", {
    loop: true,
    speed: 400,
    autoplay: {
        delay: 1200,
    },
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
        // when window width is >= 320px
        1250: {
            slidesPerView: 5,
        },

        1000: {
            slidesPerView: 4,
        },
        900: {
            slidesPerView: 3,
        },
        700: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,
        },
    },
});

const swiper2 = new Swiper(".swiper2", {
    spaceBetween: 30,
    slidesPerView: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    breakpoints: {
        1350: {
            slidesPerView: 3,
        },

        1000: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
});

const swiperPrev = document.getElementById("swiperPrev");
const swiperNext = document.getElementById("swiperNext");

swiperPrev.addEventListener("click", () => {
    swiper2.slidePrev();
});
swiperNext.addEventListener("click", () => {
    swiper2.slideNext();
});

const swiperPrev1 = document.getElementById("swiperPrev1");
const swiperNext1 = document.getElementById("swiperNext1");

swiperPrev1.addEventListener("click", () => {
    swiper.slidePrev();
});
swiperNext1.addEventListener("click", () => {
    swiper.slideNext();
});
