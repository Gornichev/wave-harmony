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
const searchBar = document.querySelector('.search-bar')

document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(searchBar)

    if(click){
        searchBtn.classList.add('show')
    }

    if ( !click ) {
        searchBtn.classList.remove('show')
    }
})


const  buttonToggle = document.querySelectorAll('.btn-toggle')
const  iconStroke = document.querySelectorAll('.icon-down-stroke')

buttonToggle.forEach(function (item){

        item.addEventListener('click', function (){

        this.classList.toggle('rotate')

    })
})

// Tabs
const tabHeaders = document.querySelectorAll('.categories-section-item');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item) {
    item.addEventListener('click', function () {

        contentBoxes.forEach(function (item) {
            item.classList.add('hidden');
        });

        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden');

    })
})

// Swiper fool card

const swiper = new Swiper(".swiper-full-card", {
    slidesPerView: 2,
    spaceBetween: 13,
    slidesPerGroup: 2,
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


const btnShare = document.getElementById('btnShare')
const shareBox = document.querySelector('.share-box')

btnShare.addEventListener('click', function (){

    shareBox.classList.toggle('active')

})


const customToggle = document.querySelector('[data-select]')
const customList = document.querySelector('.custom-select-list')
const list = document.querySelector( '.custom-select')

document.addEventListener( 'click', (e) => {

    const examinationList = e.composedPath().includes(list)

    customToggle.classList.toggle('custom-select-show')

    if ( !
        examinationList ) {
        customToggle.classList.add('custom-select-show')
    }
    if ( !
        examinationList ) {
        customToggle.classList.remove('custom-select-show')
    }
})


const header = document.querySelector('#header')
console.log(header)

window.addEventListener('scroll', function() {
    let scrollHeader = window.scrollY
    console.log(scrollHeader)
});