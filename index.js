import{a as b,S as v,i as u}from"./assets/vendor-C_7oAj77.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const g=e=>`
    <li class="gallery-card">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <ul class="text-info">
        <li class="image-info">
          <h4>Likes</h4>
          <p>${e.likes}</p>
        </li>
        <li class="image-info">
          <h4>Views</h4>
          <p>${e.views}</p>
        </li>
        <li class="image-info">
          <h4>Comments</h4>
          <p>${e.comments}</p>
        </li>
        <li class="image-info">
          <h4>Downloads</h4>
          <p>${e.downloads}</p>
        </li>
      </ul>
    </li>
  `,y=(e,s)=>{const a=new URLSearchParams({q:e,key:"48488586-a0a2593ae7f5d81beed47469e",image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15});return b.get(`https://pixabay.com/api/?${a}`)},c=document.querySelector(".js-search-form"),m=document.querySelector(".js-gallery"),d=document.querySelector(".loader"),o=document.querySelector(".js-load-btn");let l=1,i="",p=15,f=0;o.classList.add("is-hidden");const L=new v(".js-gallery a",{captionDelay:300,captionsData:"alt"}),S=async e=>{try{if(e.preventDefault(),i=c.elements[0].value.trim(),i===""){u.error({message:"Please enter your request",position:"topRight"});return}l=1,o.classList.add("is-hidden"),d.classList.add("show-loader"),m.innerHTML="";const{data:s}=await y(i,l);if(f=s.totalHits,s.total===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.reset(),i="";return}const a=s.hits.map(g).join("");m.innerHTML=a,L.refresh(),c.reset(),s.hits.length<p?o.classList.add("is-hidden"):(o.classList.remove("is-hidden"),o.addEventListener("click",w))}catch(s){console.log(s)}finally{d.classList.remove("show-loader")}};c.addEventListener("submit",S);const w=async()=>{try{d.classList.add("show-loader"),l++;const{data:e}=await y(i,l),s=e.hits.map(g).join("");m.insertAdjacentHTML("beforeend",s),L.refresh(),d.classList.remove("show-loader");let n=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"}),(l*p>=f||e.hits.length<p)&&(o.classList.add("is-hidden"),u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),o.removeEventListener("click",w))}catch(e){console.log(e)}};
//# sourceMappingURL=index.js.map
