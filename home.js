import{f as n,c as l,a as d}from"./assets/createMarkup-Ba0XG9hl.js";import{S as o,P as u,A as p}from"./assets/vendor-Cw4SvEfu.js";const r=document.querySelector(".js-loader");function m(){r&&(r.style.display="block")}function h(){r&&(r.style.display="none")}const b=document.querySelector(".js-random-characters__swiper-box"),v=document.querySelector(".js-random-characters__list");m();n().then(e=>{b.innerHTML=l(e),v.innerHTML=d(e)}).catch(e=>{console.log(e)}).finally(()=>{h()});const s=document.querySelector(".js-hero__btn");new o(".hero__swiper",{modules:[u],slidesPerView:1,direction:"horizontal",pagination:{el:".swiper-pagination",clickable:!0,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},breakpoints:{1440:{slidesPerView:1,direction:"vertical"}},on:{slideChange:function(){document.querySelectorAll(".swiper-pagination-bullet").forEach(t=>{t.classList.remove("swiper-pagination-bullet-active--red","swiper-pagination-bullet-active--green")});const a=document.querySelector(".swiper-pagination-bullet-active");switch(this.activeIndex){case 0:s.style.backgroundColor="rgba(52, 56, 127, 1)";break;case 1:s.style.backgroundColor="rgba(96, 4, 4, 1)",a&&a.classList.add("swiper-pagination-bullet-active--red");break;case 2:s.style.backgroundColor="rgba(91, 127, 60, 1)",a&&a.classList.add("swiper-pagination-bullet-active--green");break}}}});new o(".random-characters__swiper",{modules:[p],centeredSlides:!0,autoplay:{delay:3500,disableOnInteraction:!1},breakpoints:{1440:{direction:"vertical"}},on:{slideChange:function(){const e=document.querySelectorAll(".random-characters__name"),a=document.querySelectorAll(".random-characters__description");e.forEach(i=>{i.classList.remove("random-characters__text--active")}),a.forEach(i=>{i.classList.remove("random-characters__text--active")});const t=e[this.activeIndex],c=a[this.activeIndex];t&&t.classList.add("random-characters__text--active"),c&&c.classList.add("random-characters__text--active")}}});
//# sourceMappingURL=home.js.map
