const swiperIntro = new Swiper(".swiper-intro", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Tooltip
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Slider-item
const SwiperItem = new Swiper(".swiper-card", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// swiper-trust

const slider = new Swiper(".in-trust-slider", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    direction: "vertical",
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            direction: "vertical",
            spaceBetween: 24,
        },
    }
});

const intro = new Swiper(".trust-slider", {
    spaceBetween: 30,
    loop: false,
    thumbs: {
        swiper: slider,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

const searchIcon = document.getElementById('searchIcon')
const searchBtn = document.getElementById('searchBtn')
const searchBar =document.querySelector('.search-bar')


document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(searchBar)

    if(click){
        searchBtn.classList.add('show')
    }

    if ( !click ) {
        searchBtn.classList.remove('show')
    }
})

