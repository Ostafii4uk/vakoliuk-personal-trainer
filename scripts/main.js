'use strict';

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
