
var swiper = new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        DynmicBullests: true,
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    loop: true,
});

// slider On Sale Product
var swiper = new Swiper(".scle_sec ", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        // disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    loop: true,
    breakpoints: {
        1600: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    }
});


// sliderComputer & Desktop Products
var swiper = new Swiper(".product_swip", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        // disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    loop: true,
    breakpoints: {
        1500: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        900: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        600: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    }
});

