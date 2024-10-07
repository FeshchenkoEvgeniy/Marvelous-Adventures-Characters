import{b as x,d as M,e as _}from"./assets/createMarkup-FaEosC6c.js";import{f as E,d as p,b as S}from"./assets/vendor-Cw4SvEfu.js";function C(){return window.innerWidth<=767?{limit:5,offset:0,requiredCharacters:5,currentCategory:"mobile"}:window.innerWidth<=1439?{limit:8,offset:0,requiredCharacters:8,currentCategory:"tablet"}:{limit:16,offset:0,requiredCharacters:16,currentCategory:"desktop"}}const F=document.querySelector("#date-picker"),B=document.querySelector(".js-filter-form"),s=document.querySelector(".js-characters-list"),g=document.querySelector(".js-main-character__btn"),h=document.querySelector(".js-loader"),m=document.querySelector("body"),y=document.querySelector(".notFound__box"),{limit:D,offset:W,requiredCharacters:Y,currentCategory:H}=C(),r={limit:D,offset:W,requiredCharacters:Y,currentCategory:H,total:0},o={comics:null,name:null,orderBy:null,date:null};function N(){const e=C();e.currentCategory!==r.currentCategory&&(r.currentCategory=e.currentCategory,r.limit=e.limit,r.offset=0,r.requiredCharacters=e.requiredCharacters,i(),s.innerHTML="")}function l(e,t){e?(h.style.display="block",m.style.pointerEvents="none"):(h.style.display="none",m.style.pointerEvents="all"),g.style.display=t?"block":"none"}function T(e){e?(y.style.display="",s.style.display="none"):(y.style.display="none",s.style.display="")}i();function V(e){const t=e.target;switch(t.name){case"comics":o.comics=t.value.replace(/[^0-9]/g,"");break;case"name":o.name=t.value;break;case"orderBy":o.orderBy=t.value.toLowerCase();break}r.offset=0,s.innerHTML="",i()}async function i(){let e=[];for(l(!0,!1);e.length<r.requiredCharacters;){try{const{data:t}=await x(o,r.offset,r.limit);r.total=t.total,T(!t.results.length);const a=t.results.filter(({thumbnail:{path:n}})=>!n.endsWith("image_not_available")&&!n.endsWith("4c002e0305708"));e=[...e,...a],r.offset+=r.limit}catch(t){console.log("Помилка під час запиту:",t);break}if(r.total<=r.offset){l(!1,!1);break}if(e.length>=r.requiredCharacters){e=e.slice(0,r.requiredCharacters),l(!1,!0);break}}s.insertAdjacentHTML("beforeend",M(e))}function z(){i()}E(F,{defaultDate:new Date,allowInput:!0,onClose:(e,t,a)=>{if(I(t))o.date=t;else{Notiflix.Notify.failure("Invalid date format. Expected YYYY-MM-DD"),a.clear(),o.date=null;return}}});function I(e){return/^\d{4}-\d{2}-\d{2}$/.test(e)}g.addEventListener("click",z);B.addEventListener("input",p(800,V));window.addEventListener("resize",p(1e3,N));const R=document.querySelector(".js-characters-list");function A(e){const t=e.target;let a;if(t.classList.contains("js-characters-list"))return;const n=t.closest(".characters__item"),d=n==null?void 0:n.dataset.url;d?_(d).then(c=>{const{name:u,description:b,modified:k,thumbnail:{path:v,extension:q},randomComics:w}=c,L=w.map(({thumbnail:{path:$,extension:j},title:f})=>`<li>
                <img src="${$}.${j}" alt="${f}">
                <p>${f}</p>
            </li>`).join("");a=S.create(`
        <div>
            <img src="${v}.${q}" alt="${u}">
        <div>
            <p>${u}</p>
            <p>${k}</p>
            <p>${b}</p>
            <p>List of comics</p>
        <ul style="max-height: 60vh; overflow-y: auto;">
            ${L}
        </ul>
        </div>
        </div>
        `),a.show()}).catch(c=>console.log(c)):console.error("URL not found")}R.addEventListener("click",A);
//# sourceMappingURL=characters.js.map
