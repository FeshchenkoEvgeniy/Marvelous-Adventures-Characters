import Swiper from 'swiper';
import 'swiper/css';
import {Pagination, Autoplay } from 'swiper/modules';

const heroBtn = document.querySelector('.js-hero__btn') as HTMLElement

const heroSwiper = new Swiper('.hero__swiper', {
  modules: [Pagination],
  slidesPerView: 1,
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
  },
  breakpoints: {
    1440: {
      slidesPerView: 1,
      direction: 'vertical',
    }
  },
  on: {
    slideChange: function () {
      const bullets = document.querySelectorAll('.swiper-pagination-bullet');
      bullets.forEach((bullet) => {
        bullet.classList.remove('swiper-pagination-bullet-active--red', 'swiper-pagination-bullet-active--green');
      });

      const swiperActiveBullet = document.querySelector('.swiper-pagination-bullet-active') as HTMLElement;
      switch (this.activeIndex) {
        case 0:
          heroBtn.style.backgroundColor = 'rgba(52, 56, 127, 1)';
          break;
        case 1:
          heroBtn.style.backgroundColor = 'rgba(96, 4, 4, 1)';
          if (swiperActiveBullet) {
            swiperActiveBullet.classList.add('swiper-pagination-bullet-active--red');
          }
          break;
        case 2:
          heroBtn.style.backgroundColor = 'rgba(91, 127, 60, 1)';
          if (swiperActiveBullet) {
            swiperActiveBullet.classList.add('swiper-pagination-bullet-active--green');
          }
          break;
      }
    },
  }
});

const randomCharactersSwiper = new Swiper(".random-characters__swiper", {
  modules: [Autoplay],
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      direction: 'vertical',
    }
  },
  on: {
    slideChange: function () {
      const randomCharactersName = document.querySelectorAll('.random-characters__name');
      const randomCharactersDescription = document.querySelectorAll('.random-characters__description');

      randomCharactersName.forEach((name) => {
        name.classList.remove('random-characters__text--active');
      });

      randomCharactersDescription.forEach((name) => {
        name.classList.remove('random-characters__text--active');
      });

    const activeName = randomCharactersName[this.activeIndex];
    const activeDescription = randomCharactersDescription[this.activeIndex];
   
    if (activeName) {
      activeName.classList.add('random-characters__text--active');
    }

    if (activeDescription) {
      activeDescription.classList.add('random-characters__text--active');
    }
    },
  }
});