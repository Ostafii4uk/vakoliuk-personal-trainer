'use strict';

const mobileNavbar = document.getElementById('mobile-navbar')
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle('header__hamburger-lines--active')
  mobileNavbar.classList.toggle('header__mobile-navbar--show')
  body.classList.toggle('stop-scrolling');
})
const mobileNavbarItem = document.getElementsByClassName('mobile-navbar__item')
mobileNavbar.addEventListener('click', () => {
  hamburger.classList.remove('header__hamburger-lines--active')
  mobileNavbar.classList.remove('header__mobile-navbar--show')
  body.classList.remove('stop-scrolling');
})

const joinMePhotosSwiper = new Swiper(".join-me-photos-swiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 100,
  autoplay: {},
  waitForTransition: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  }
})

const resultsPhotoSwiper = new Swiper(".results-photo-swiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 100,
  allowTouchMove: false
})

const resultsFeedbackSwiper = new Swiper(".results-feedback-swiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 100,
  allowTouchMove: false
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
const popupWindow = document.getElementById('header-popup');

popupWindow.addEventListener('click', () => {
  popupWindow.classList.remove('header__popup--visible');
  body.classList.remove('stop-scrolling');
});

const setVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('load', setVh);
window.addEventListener('resize', setVh);