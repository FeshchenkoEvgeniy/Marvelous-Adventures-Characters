import{m,S as d,P as h,A as f}from"./assets/vendor-VW2NxkVE.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const n=[1017100,1009144,1009146,1010354,1010755,1009740,1011758,1009165,1009596,1011778,1011793,1011346,1010782,1011907,1011809,1017109,1011119,1010366,1011276,1009220,1017575,1017105,1009225,1010754,1012065,1010676,1009262,1010890,1011071,1017102,1009297,1017110,1009299,1009539,1010980,1011299,1009619,1011490,1017108,1009351,1017098,1017107,1016839,1009368,1017104,1009538,1011876,1011105,1011319,1009735,1009708,1010993,1009677,1013727,1017577,1017078,1016837,1010779,1016840,1017099,1010744,1010747,1010790,1011230,1009581,1009568,1009571,1010345,1009573,1010975,1010974,1011406,1009577,1009578,1010712,1009579,1009580,1017111,1009583,1009582,1010858,1009587,1009588,1009589,1009590,1009591,1010976,1009592,1010864,1009594,1011223,1017101,1009598,1011157,1011057,1010761,1010874,1009603,1009606,1010855,1010693,1010833,1011032,1009157,1009609,1012200,1011114,1016181,1009610,1011010,1009608,1010794,1009614,1011158,1010899,1009616,1010860,1010733,1009621,1011084,1010828,1011159,1009625,1009627,1009628,1009629,1010979,1010978,1011062,1011051,1009632,1010791,1011212,1009636,1010981,1009638,1011022,1009639,1011232,1011160,1010695,1011075,1011017,1009641,1009643,1011161,1009648,1011162,1011034,1009652,1017103,1011181,1009662,1010983,1009664,1017576,1017106,1011025,1010820,1009666,1009667,1010360,1011304,1009669,1009670,1011345,1010669,1009673,1009675,1011309,1009676,1010822,1010825,1010335,1011047,1010369,1009681,1009682,1009683,1010358,1016825,1011311,1009685,1010862,1010696,1010984,1009687,1010987,1010986,1010350,1011182,1011316,1009690,1010872,1009691,1009663,1010788,1011128,1011106,1010353,1009695,1009697,1011011,1009699,1010990,1011267,1010991,1011287,1009705,1009706,1009707,1010992,1010765,1011588,1010348,1016838,1009714,1009715,1010994,1009633,1011009,1011043,1009717,1010995,1009718,1011006,1009719,1009720,1009722,1009725,1009726,1010875,1009734,1009737,1010996,1011163,1011515,1009741,1009742];let l=[];function b(){for(let r=0;r<5;r++){const a=Math.round(Math.random()*n.length);l.push(a)}return l.map(r=>n[r])}const u="1",p="3e4a92df9169701b297c3638807c7b2e",g="c93b62455441ec9a036d868875eb8644bb02aa07",y=m(u+g+p),v="https://gateway.marvel.com/v1/public/",_=async()=>{const r=b().map(async e=>(await fetch(`${v}/characters/${e}?ts=${u}&apikey=${p}&hash=${y}`)).json());return(await Promise.all(r)).flatMap(({data:{results:e}})=>e)};function w(){const t=document.querySelector(".js-loader");t&&(t.style.display="block")}function L(){const t=document.querySelector(".js-loader");t&&(t.style.display="none")}const S=document.querySelector(".js-random-characters__swiper-box"),q=document.querySelector(".js-random-characters__list");w();_().then(t=>{S.innerHTML=C(t),q.innerHTML=$(t)}).catch(t=>{console.log(t)}).finally(()=>{L()});function C(t){return t.map(({name:r,thumbnail:{extension:a,path:o}})=>`
        <div class="swiper-slide"><img src="${o}.${a}" alt="${r}" class='random-characters__img'></div>
        `).join("")}const A="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero praesentium doloremque quos voluptatem voluptates ipsa recusandae fugit officia. Sequi, cupiditate ut. Error placeat reprehenderit laudantium quibusdam voluptates,laboriosam ipsum!";function $(t){return t.map(({name:r,description:a,resourceURI:o})=>`<li class="random-characters__item" data-url='${o}'>
        <p class='random-characters__name'>${r}</p>        
        <p class="random-characters__description">${!a.trim().length||a.includes("&nbsp;")?A:a}</p>
        </li>`).join("")}const i=document.querySelector(".js-hero__btn");new d(".hero__swiper",{modules:[h],slidesPerView:1,direction:"horizontal",pagination:{el:".swiper-pagination",clickable:!0,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},breakpoints:{1440:{slidesPerView:1,direction:"vertical"}},on:{slideChange:function(){document.querySelectorAll(".swiper-pagination-bullet").forEach(a=>{a.classList.remove("swiper-pagination-bullet-active--red","swiper-pagination-bullet-active--green")});const r=document.querySelector(".swiper-pagination-bullet-active");switch(this.activeIndex){case 0:i.style.backgroundColor="rgba(52, 56, 127, 1)";break;case 1:i.style.backgroundColor="rgba(96, 4, 4, 1)",r&&r.classList.add("swiper-pagination-bullet-active--red");break;case 2:i.style.backgroundColor="rgba(91, 127, 60, 1)",r&&r.classList.add("swiper-pagination-bullet-active--green");break}}}});new d(".random-characters__swiper",{modules:[f],centeredSlides:!0,autoplay:{delay:3500,disableOnInteraction:!1},breakpoints:{1440:{direction:"vertical"}},on:{slideChange:function(){const t=document.querySelectorAll(".random-characters__name"),r=document.querySelectorAll(".random-characters__description");t.forEach(e=>{e.classList.remove("random-characters__text--active")}),r.forEach(e=>{e.classList.remove("random-characters__text--active")});const a=t[this.activeIndex],o=r[this.activeIndex];a&&a.classList.add("random-characters__text--active"),o&&o.classList.add("random-characters__text--active")}}});
//# sourceMappingURL=home.js.map
