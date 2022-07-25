const swiper1 = document.querySelector('.slider-container'),
    swiper2 = document.querySelector('.swiper-container'),
    burger = document.querySelector('.burger'),
    close = document.querySelector('.menu__close'),
    menu = document.querySelector('.menu'),
    playButtonsFirst = document.querySelectorAll('.main-slider__play ');

let swiperSlider1 = new Swiper(swiper1, {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 105,
});
