import{a as b,S as L,i as d}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();async function u(t,r){return(await b.get("https://pixabay.com/api/",{params:{key:"34206508-2ad29bd7e91dc1db4e67bd855",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}function w(t){const{largeImageURL:r,webformatURL:a,tags:l,likes:e,views:o,comments:i,downloads:g}=t;return`<li class="gallery-item">
  <a href="${r}">
    <img src="${a}" class="gallery-image" alt="${l}" />
  </a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b> </br>${e}
    </p>
    <p class="info-item">
      <b>Views</b> </br>${o}
    </p>
    <p class="info-item">
      <b>Comments</b> </br>${i}
    </p>
    <p class="info-item">
      <b>Downloads</b> </br>${g}
    </p>
  </div>
</li>`}function v(t){return t.map(w).join("")}const s={form:document.querySelector(".form"),loader:document.querySelector(".load"),myGallery:document.querySelector(".gallery"),btn:document.querySelector(".btn")},S=new L(".gallery a",{captionType:"attr",captionsData:"alt",captionDelay:250});let c,n,f;s.form.addEventListener("submit",q);s.btn.addEventListener("click",G);async function q(t){if(t.preventDefault(),c=t.target.elements.search.value.trim(),n=1,c==="")return;p();const r=await u(c,n);r.hits.length===0&&P(),f=Math.ceil(r.totalHits/15),s.myGallery.innerHTML="",m(r.hits),h(),y(),t.target.reset()}async function G(){n+=1,p();const t=await u(c,n);m(t.hits),h(),y();const r=s.myGallery.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:r*2}),s.myGallery.children.length===t.totalHits&&$()}function P(){d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}function $(){d.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}function m(t){const r=v(t);s.myGallery.insertAdjacentHTML("beforeend",r),S.refresh()}function p(){s.loader.classList.add("loader")}function h(){s.loader&&s.loader.classList.remove("loader")}function O(){s.btn.classList.remove("hidden")}function x(){s.btn.classList.add("hidden")}function y(){n>=f?x():O()}
//# sourceMappingURL=commonHelpers.js.map
