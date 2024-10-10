import{m as w}from"./vendor-Cw4SvEfu.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const e of c.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&o(e)}).observe(document,{childList:!0,subtree:!0});function s(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(t){if(t.ep)return;t.ep=!0;const c=s(t);fetch(t.href,c)}})();const y=[1017100,1009144,1009146,1010354,1010755,1009740,1011758,1009165,1009596,1011778,1011793,1011346,1010782,1011907,1011809,1017109,1011119,1010366,1011276,1009220,1017575,1017105,1009225,1010754,1012065,1010676,1009262,1010890,1011071,1017102,1009297,1017110,1009299,1009539,1010980,1011299,1009619,1011490,1017108,1009351,1017098,1017107,1016839,1009368,1017104,1009538,1011876,1011105,1011319,1009735,1009708,1010993,1009677,1013727,1017577,1017078,1016837,1010779,1016840,1017099,1010744,1010747,1010790,1011230,1009581,1009568,1009571,1010345,1009573,1010975,1010974,1011406,1009577,1009578,1010712,1009579,1009580,1017111,1009583,1009582,1010858,1009587,1009588,1009589,1009590,1009591,1010976,1009592,1010864,1009594,1011223,1017101,1009598,1011157,1011057,1010761,1010874,1009603,1009606,1010855,1010693,1010833,1011032,1009157,1009609,1012200,1011114,1016181,1009610,1011010,1009608,1010794,1009614,1011158,1010899,1009616,1010860,1010733,1009621,1011084,1010828,1011159,1009625,1009627,1009628,1009629,1010979,1010978,1011062,1011051,1009632,1010791,1011212,1009636,1010981,1009638,1011022,1009639,1011232,1011160,1010695,1011075,1011017,1009641,1009643,1011161,1009648,1011162,1011034,1009652,1017103,1011181,1009662,1010983,1009664,1017576,1017106,1011025,1010820,1009666,1009667,1010360,1011304,1009669,1009670,1011345,1010669,1009673,1009675,1011309,1009676,1010822,1010825,1010335,1011047,1010369,1009681,1009682,1009683,1010358,1016825,1011311,1009685,1010862,1010696,1010984,1009687,1010987,1010986,1010350,1011182,1011316,1009690,1010872,1009691,1009663,1010788,1011128,1011106,1010353,1009695,1009697,1011011,1009699,1010990,1011267,1010991,1011287,1009705,1009706,1009707,1010992,1010765,1011588,1010348,1016838,1009714,1009715,1010994,1009633,1011009,1011043,1009717,1010995,1009718,1011006,1009719,1009720,1009722,1009725,1009726,1010875,1009734,1009737,1010996,1011163,1011515,1009741,1009742];let b=[];function I(){for(let a=0;a<5;a++){const s=Math.round(Math.random()*y.length);b.push(s)}return b.map(a=>y[a])}function x(r){let a=[];if(!r)return a;const s=Math.min(3,r);for(;a.length<s;){const o=Math.floor(Math.random()*r);a.includes(o)||a.push(o)}return a}const p="1",h="3e4a92df9169701b297c3638807c7b2e",M="c93b62455441ec9a036d868875eb8644bb02aa07",u=w(p+M+h),f="https://gateway.marvel.com/v1/public";async function k(){const a=I().map(async t=>(await fetch(`${f}/characters/${t}?ts=${p}&apikey=${h}&hash=${u}`)).json());return(await Promise.all(a)).flatMap(({data:{results:t}})=>t)}async function F(r,a,s){const{comics:o,name:t,orderBy:c,date:e}=r,i=new URLSearchParams;return o&&i.append("comics",o),t&&i.append("nameStartsWith",t),c&&i.append("orderBy",c),e&&i.append("modifiedSince",e),(await fetch(`${f}/characters?${i}&limit=${s}&offset=${a}&ts=${p}&apikey=${h}&hash=${u}`)).json()}async function L(r){const a=r.split("/"),s=a[a.length-1];return await fetch(`${f}/characters/${s}?ts=${p}&apikey=${h}&hash=${u}`).then(t=>{if(!t.ok)throw new Error("Error");return t.json()}).then(async({data:{results:t}})=>{const{name:c,comics:e,description:i,modified:n,thumbnail:l}=t[0],d=x(e.items.length),m=await j(d,t);return{name:c,description:i,modified:n,thumbnail:l,randomComics:m}}).catch(t=>console.log(t))}async function j(r,a){const o=r.map(e=>a[0].comics.items[e]).map(async e=>{const i=e.resourceURI.split("/"),n=i[i.length-1];return(await fetch(`${f}/comics/${n}?ts=${p}&apikey=${h}&hash=${u}`)).json()});return(await Promise.all(o)).flatMap(({data:{results:e}})=>({thumbnail:e[0].thumbnail,title:e[0].title,comicsId:e[0].id}))}async function U(r){return await fetch(`${f}/comics/${r}?ts=${p}&apikey=${h}&hash=${u}`).then(s=>{if(!s.ok)throw new Error("Error");return s.json()}).then(async({data:{results:s}})=>{const{title:o,prices:t,pageCount:c,format:e,description:i,modified:n,thumbnail:l,characters:{items:d}}=s[0],m=await O(d);return{title:o,prices:t,pageCount:c,format:e,description:i,modified:n,thumbnail:l,characters:m}}).catch(s=>console.log(s))}async function O(r){const a=r.map(async c=>{const e=c.resourceURI.split("/"),i=e[e.length-1];return(await fetch(`${f}/characters/${i}?ts=${p}&apikey=${h}&hash=${u}`)).json()});return(await Promise.all(a)).flatMap(({data:{results:c}})=>({thumbnail:c[0].thumbnail,name:c[0].name})).filter(({thumbnail:{path:c}})=>!c.endsWith("image_not_available")&&!c.endsWith("4c002e0305708"))}function S(r){return r.map(({name:a,thumbnail:{extension:s,path:o}})=>`
        <div class="swiper-slide"><img src="${o}.${s}" alt="${a}" class='random-characters__img'></div>
        `).join("")}const $="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero praesentium doloremque quos voluptatem voluptates ipsa recusandae fugit officia. Sequi, cupiditate ut. Error placeat reprehenderit laudantium quibusdam voluptates,laboriosam ipsum!";function A(r){return r.map(({name:a,description:s,resourceURI:o})=>`<li class="random-characters__item" data-url='${o}'>
        <p class='random-characters__name'>${a}</p>        
        <p class="random-characters__description">${!s.trim().length||s.includes("&nbsp;")?$:s}</p>
        </li>`).join("")}function E(r){return r.map(({name:a,resourceURI:s,thumbnail:{extension:o,path:t}})=>`
            <li class="characters__item" data-url='${s}'>
                <img src="${t}.${o}" alt="${a}" class="characters__img" />
                <p class="characters__name">${a}</p>
            </li>
        `).join("")}function v(r){const a=new Date(r),s={year:"numeric",month:"long",day:"numeric"};return a.toLocaleDateString("en-US",s)}function R(r){const{name:a,description:s,modified:o,thumbnail:{path:t,extension:c},randomComics:e}=r,i=v(o),n=e.map(({thumbnail:{path:l,extension:d},title:m,comicsId:_})=>`<li class='characters-modal__item' data-comicsId='${_}'>
                <img src="${l}.${d}" alt="${m}" class='characters-modal__comics-img'>
                <p class='characters-modal__comics-title'>${m}</p>
            </li>`).join("");return`
    <div class='characters-modal__container'>
        <img src="${t}.${c}" alt="${a}" class='characters-modal__img'>
    <div class='characters-modal--bg'>
    <div class='characters-modal__box'>
        <div class='characters-modal__wrapper'> 
        <p class='characters-modal__name'>${a}</p>
        <p class='characters-modal__modified'>${i}</p>
        </div>
        <p class='characters-modal__description'>${!s.trim().length||s.includes("&nbsp;")?$:s}</p>
    </div>
    <div>
        <p class='characters-modal__title'>List of comics</p>
        ${e.length?`<ul class='characters-modal__list js-characters-modal__list'>
            ${n}
        </ul>`:`<div class="notFound__box" style="margin-top: 16px;">
        <p class="notFound__text" style="text-align: center;">Not found..</p>
      </div>`} 
    </div>
    </div>
    </div>    
    `}function q(r){const{title:a,description:s,modified:o,thumbnail:{path:t,extension:c},characters:e,prices:i,format:n,pageCount:l}=r,d=v(o),m=e.map(({thumbnail:{path:_,extension:C},name:g})=>`<li class='comics-modal__item'>
                <img src="${_}.${C}" alt="${g}" class='comics-modal__characters-img'>
                <p class='comics-modal__characters-name'>${g}</p>
            </li>`).join("");return`
    <div class='comics-modal__container'>
        <img src="${t}.${c}" alt="${a}" class='comics-modal__img'>
    <div class='comics-modal--bg'>
    <div class='comics-modal__box'>
        <div class='comics-modal__wrapper'> 
        <p class='comics-modal__name'>${a}</p>
        <p class='comics-modal__modified'>${d}</p>
        </div>
        <p class='comics-modal__description'>${s===null||!s.trim().length||s.includes("&nbsp;")?$:s}</p>
        <ul class='comics-modal__detail-list'>
            <li class='comics-modal_detail-item'> 
                <span class='comics-modal_detail-preTitle'>Format</span>
                <p class='comics-modal_detail-text'>${n}</p>
            </li>
            <li class='comics-modal_detail-item'> 
                <span class='comics-modal_detail-preTitle'>Pages</span>
                <p class='comics-modal_detail-text'>${l||32}</p>
            </li>
            <li class='comics-modal_detail-item'> 
                <span class='comics-modal_detail-preTitle'>Price</span>
                <p class='comics-modal_detail-text'>$${i[0].price?i[0].price:2.99}</p>
            </li>
        </ul>
    </div>
    <div>
        <p class='comics-modal__title'>Characters</p>
        <ul class='comics-modal__list'>
            ${m}
        </ul>
    </div>
    </div>
    </div>    
    `}export{A as a,F as b,S as c,E as d,U as e,k as f,q as g,L as h,R as i};
//# sourceMappingURL=createMarkup-Ba0XG9hl.js.map
