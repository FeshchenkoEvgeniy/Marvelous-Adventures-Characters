import Swiper from 'swiper';
import 'swiper/css';
// import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  slidesPerView: 1, // або 2, 3 - відповідно до вашого макету
  // spaceBetween: 10,
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
});