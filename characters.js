import{a as C}from"./assets/api-CEbok3hU.js";import{f as g,d as f}from"./assets/vendor-Dn3nGrsG.js";const p=document.querySelector("#date-picker"),b=document.querySelector(".js-filter-form"),a={comics:null,name:null,orderBy:null,date:null};function q(e){const t=e.target;switch(t.name){case"comics":a.comics=t.value.replace(/[^0-9]/g,"");break;case"name":a.name=t.value;break;case"orderBy":a.orderBy=t.value;break}console.log(a)}g(p,{defaultDate:new Date,allowInput:!0,onClose:(e,t,n)=>{if(k(t))a.date=t;else{Notiflix.Notify.failure("Invalid date format. Expected YYYY-MM-DD"),n.clear(),a.date=null;return}}});function k(e){return/^\d{4}-\d{2}-\d{2}$/.test(e)}b.addEventListener("input",f(800,q));function m(){return window.innerWidth<=767?{limit:5,offset:0,requiredCharacters:5,currentCategory:"mobile"}:window.innerWidth<=1439?{limit:8,offset:0,requiredCharacters:8,currentCategory:"tablet"}:{limit:16,offset:0,requiredCharacters:16,currentCategory:"desktop"}}const y=document.querySelector(".js-characters-list"),s=document.querySelector(".js-main-character__btn"),l=document.querySelector(".js-loader"),d=document.querySelector("body"),{limit:w,offset:v,requiredCharacters:_,currentCategory:j}=m(),r={limit:w,offset:v,requiredCharacters:_,currentCategory:j};let c=!0;window.addEventListener("resize",f(1e3,L));s.addEventListener("click",M);o();function L(){const e=m();e.currentCategory!==r.currentCategory&&(r.currentCategory=e.currentCategory,r.limit=e.limit,r.offset=0,r.requiredCharacters=e.requiredCharacters,y.innerHTML="",o())}function u(){c?(l.style.display="block",d.style.pointerEvents="none"):(l.style.display="none",d.style.pointerEvents="all")}async function o(){let e=[];for(s.style.display="none",c=!0,u();e.length<r.requiredCharacters;){try{const{data:t}=await C(r.offset,r.limit),n=t.results.filter(({thumbnail:{path:i}})=>!i.endsWith("image_not_available")&&!i.endsWith("4c002e0305708"));e=[...e,...n],r.offset+=r.limit}catch(t){console.log("Помилка під час запиту:",t);break}if(e.length>=r.requiredCharacters){e=e.slice(0,r.requiredCharacters),s.style.display="block",c=!1,u();break}}y.insertAdjacentHTML("beforeend",D(e))}function M(){r.offset>=1500&&(s.style.display="none"),o()}function D(e){return e.map(({name:t,resourceURI:n,thumbnail:{extension:i,path:h}})=>`
            <li class="characters__item" data-url='${n}'>
                <img src="${h}.${i}" alt="${t}" class="characters__img" />
                <p class="characters__name">${t}</p>
            </li>
        `).join("")}
//# sourceMappingURL=characters.js.map
