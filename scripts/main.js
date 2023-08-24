'use strict';

const joinMePhotosSwiper = new Swiper(".join-me-photos-swiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 100,
  autoplay: {},
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
})

const resultsPhotoSwiper = new Swiper(".results-photo-swiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 100,
})

const resultsFeedbackSwiper = new Swiper(".results-feedback-swiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 100,
})

const swiperButtonPrev = document.getElementById('swiper-button-prev')
swiperButtonPrev.addEventListener('click', () => {
  resultsPhotoSwiper.slidePrev(500, true)
  resultsFeedbackSwiper.slidePrev(500, true)
})

const swiperButtonNext = document.getElementById('swiper-button-next')
swiperButtonNext.addEventListener('click', () => {
  resultsPhotoSwiper.slideNext(500, true)
  resultsFeedbackSwiper.slideNext(500, true)
})

const body = document.getElementById('app')
const playMeBtn = document.getElementById('play-about-me');
const popupWindow = document.getElementById('header-popup');

playMeBtn.addEventListener('click', () => {
  popupWindow.classList.add('header__popup--visible');
  body.classList.add('stop-scrolling');
});

popupWindow.addEventListener('click', () => {
  popupWindow.classList.remove('header__popup--visible');
  body.classList.remove('stop-scrolling');
});
