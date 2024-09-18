import Swiper from 'swiper';
import 'swiper/css';
// import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
  },
});