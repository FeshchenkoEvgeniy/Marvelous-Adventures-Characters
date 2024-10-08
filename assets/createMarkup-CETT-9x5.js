import{m as v}from"./vendor-Cw4SvEfu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(e){if(e.ep)return;e.ep=!0;const c=a(e);fetch(e.href,c)}})();const p=[1017100,1009144,1009146,1010354,1010755,1009740,1011758,1009165,1009596,1011778,1011793,1011346,1010782,1011907,1011809,1017109,1011119,1010366,1011276,1009220,1017575,1017105,1009225,1010754,1012065,1010676,1009262,1010890,1011071,1017102,1009297,1017110,1009299,1009539,1010980,1011299,1009619,1011490,1017108,1009351,1017098,1017107,1016839,1009368,1017104,1009538,1011876,1011105,1011319,1009735,1009708,1010993,1009677,1013727,1017577,1017078,1016837,1010779,1016840,1017099,1010744,1010747,1010790,1011230,1009581,1009568,1009571,1010345,1009573,1010975,1010974,1011406,1009577,1009578,1010712,1009579,1009580,1017111,1009583,1009582,1010858,1009587,1009588,1009589,1009590,1009591,1010976,1009592,1010864,1009594,1011223,1017101,1009598,1011157,1011057,1010761,1010874,1009603,1009606,1010855,1010693,1010833,1011032,1009157,1009609,1012200,1011114,1016181,1009610,1011010,1009608,1010794,1009614,1011158,1010899,1009616,1010860,1010733,1009621,1011084,1010828,1011159,1009625,1009627,1009628,1009629,1010979,1010978,1011062,1011051,1009632,1010791,1011212,1009636,1010981,1009638,1011022,1009639,1011232,1011160,1010695,1011075,1011017,1009641,1009643,1011161,1009648,1011162,1011034,1009652,1017103,1011181,1009662,1010983,1009664,1017576,1017106,1011025,1010820,1009666,1009667,1010360,1011304,1009669,1009670,1011345,1010669,1009673,1009675,1011309,1009676,1010822,1010825,1010335,1011047,1010369,1009681,1009682,1009683,1010358,1016825,1011311,1009685,1010862,1010696,1010984,1009687,1010987,1010986,1010350,1011182,1011316,1009690,1010872,1009691,1009663,1010788,1011128,1011106,1010353,1009695,1009697,1011011,1009699,1010990,1011267,1010991,1011287,1009705,1009706,1009707,1010992,1010765,1011588,1010348,1016838,1009714,1009715,1010994,1009633,1011009,1011043,1009717,1010995,1009718,1011006,1009719,1009720,1009722,1009725,1009726,1010875,1009734,1009737,1010996,1011163,1011515,1009741,1009742];let h=[];function C(){for(let r=0;r<5;r++){const a=Math.round(Math.random()*p.length);h.push(a)}return h.map(r=>p[r])}function w(s){let r=[];if(!s)return r;const a=Math.min(3,s);for(;r.length<a;){const t=Math.floor(Math.random()*s);r.includes(t)||r.push(t)}return r}const i="1",m="3e4a92df9169701b297c3638807c7b2e",M="c93b62455441ec9a036d868875eb8644bb02aa07",d=v(i+M+m),f="https://gateway.marvel.com/v1/public";async function j(){const r=C().map(async e=>(await fetch(`${f}/characters/${e}?ts=${i}&apikey=${m}&hash=${d}`)).json());return(await Promise.all(r)).flatMap(({data:{results:e}})=>e)}async function O(s,r,a){const{comics:t,name:e,orderBy:c,date:o}=s,n=new URLSearchParams;return t&&n.append("comics",t),e&&n.append("nameStartsWith",e),c&&n.append("orderBy",c),o&&n.append("modifiedSince",o),(await fetch(`${f}/characters?${n}&limit=${a}&offset=${r}&ts=${i}&apikey=${m}&hash=${d}`)).json()}async function P(s){return await fetch(`${s}?ts=${i}&apikey=${m}&hash=${d}`).then(a=>{if(!a.ok)throw new Error("Error");return a.json()}).then(async({data:{results:a}})=>{const t=w(a[0].comics.items.length),e=await I(t,a);return{name:a[0].name,description:a[0].description,modified:a[0].modified,thumbnail:a[0].thumbnail,randomComics:e}}).catch(a=>console.log(a))}async function I(s,r){const t=s.map(o=>r[0].comics.items[o]).map(async o=>(await fetch(`${o.resourceURI}?ts=${i}&apikey=${m}&hash=${d}`)).json());return(await Promise.all(t)).flatMap(({data:{results:o}})=>({thumbnail:o[0].thumbnail,title:o[0].title}))}function S(s){return s.map(({name:r,thumbnail:{extension:a,path:t}})=>`
        <div class="swiper-slide"><img src="${t}.${a}" alt="${r}" class='random-characters__img'></div>
        `).join("")}const $="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero praesentium doloremque quos voluptatem voluptates ipsa recusandae fugit officia. Sequi, cupiditate ut. Error placeat reprehenderit laudantium quibusdam voluptates,laboriosam ipsum!";function x(s){return s.map(({name:r,description:a,resourceURI:t})=>`<li class="random-characters__item" data-url='${t}'>
        <p class='random-characters__name'>${r}</p>        
        <p class="random-characters__description">${!a.trim().length||a.includes("&nbsp;")?$:a}</p>
        </li>`).join("")}function F(s){return s.map(({name:r,resourceURI:a,thumbnail:{extension:t,path:e}})=>`
            <li class="characters__item" data-url='${a}'>
                <img src="${e}.${t}" alt="${r}" class="characters__img" />
                <p class="characters__name">${r}</p>
            </li>
        `).join("")}function k(s){const{name:r,description:a,modified:t,thumbnail:{path:e,extension:c},randomComics:o}=s,n=new Date(t),l={year:"numeric",month:"long",day:"numeric"},_=n.toLocaleDateString("en-US",l),y=o.map(({thumbnail:{path:b,extension:g},title:u})=>`<li class='characters-modal__item'>
                <img src="${b}.${g}" alt="${u}" class='characters-modal__comics-img'>
                <p class='characters-modal__comics-title'>${u}</p>
            </li>`).join("");return`
    <div class='characters-modal__container'>
        <img src="${e}.${c}" alt="${r}" class='characters-modal__img'>
    <div class='characters-modal--bg'>
    <div class='characters-modal__box'>
        <div class='characters-modal__wrapper'> 
        <p class='characters-modal__name'>${r}</p>
        <p class='characters-modal__modified'>${_}</p>
        </div>
        <p class='characters-modal__description'>${!a.trim().length||a.includes("&nbsp;")?$:a}</p>
    </div>
    <div>
        <p class='characters-modal__title'>List of comics</p>
        <ul class='characters-modal__list'>
            ${y}
        </ul>
    </div>
    </div>
    </div>    
    `}export{x as a,O as b,S as c,F as d,P as e,j as f,k as g};
//# sourceMappingURL=createMarkup-CETT-9x5.js.map
