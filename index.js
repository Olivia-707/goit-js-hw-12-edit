import{a as w,S as v,i as u}from"./assets/vendor-C_7oAj77.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const p=t=>`
    <li class="gallery-card">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <ul class="text-info">
        <li class="image-info">
          <h4>Likes</h4>
          <p>${t.likes}</p>
        </li>
        <li class="image-info">
          <h4>Views</h4>
          <p>${t.views}</p>
        </li>
        <li class="image-info">
          <h4>Comments</h4>
          <p>${t.comments}</p>
        </li>
        <li class="image-info">
          <h4>Downloads</h4>
          <p>${t.downloads}</p>
        </li>
      </ul>
    </li>
  `,g=(t,s)=>{const a=new URLSearchParams({q:t,key:"48488586-a0a2593ae7f5d81beed47469e",image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:40});return w.get(`https://pixabay.com/api/?${a}`)},m=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),l=document.querySelector(".loader"),o=document.querySelector(".js-load-btn");let n=1,d="",b=15,y=0;o.classList.add("is-hidden");const f=new v(".js-gallery a",{captionDelay:300,captionsData:"alt"}),S=async t=>{try{if(t.preventDefault(),d=m.elements[0].value.trim(),d===""){u.error({message:"Please enter your request",position:"topRight"});return}n=1,o.classList.add("is-hidden"),l.classList.add("show-loader"),c.innerHTML="";const{data:s}=await g(d,n);if(y=s.totalHits,s.total===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",m.reset();return}s.totalHits>1&&(o.classList.remove("is-hidden"),o.addEventListener("click",L));const a=s.hits.map(i=>p(i)).join("");c.innerHTML=a,f.refresh()}catch(s){console.log(s)}finally{l.classList.remove("show-loader")}};m.addEventListener("submit",S);const L=async()=>{try{setTimeout(()=>{l.classList.remove("show-loader")},500),l.classList.add("show-loader"),n++;const{data:t}=await g(d,n),s=t.hits.map(e=>p(e)).join("");c.insertAdjacentHTML("beforeend",s),f.refresh(),l.classList.remove("show-loader");let i=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"}),n*b>=y&&(o.classList.add("is-hidden"),u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),o.classList.contains("is-hidden")||o.removeEventListener("click",L))}catch(t){console.log(t)}};
//# sourceMappingURL=index.js.map
