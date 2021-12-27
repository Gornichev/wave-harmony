const swiperIntro = new Swiper(".swiper-intro", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
// Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
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
var swiper = new Swiper(".swiper-trust", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
        direction: "vertical",
    },
});
