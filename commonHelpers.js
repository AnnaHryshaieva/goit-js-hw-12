import{a as b,i as d,S as L}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();async function u(t,r){return(await b.get("https://pixabay.com/api/",{params:{key:"34206508-2ad29bd7e91dc1db4e67bd855",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}function w(t){const{largeImageURL:r,webformatURL:i,tags:l,likes:e,views:o,comments:a,downloads:g}=t;return`<li class="gallery-item">
  <a href="${r}">
    <img src="${i}" class="gallery-image" alt="${l}" />
  </a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b> </br>${e}
    </p>
    <p class="info-item">
      <b>Views</b> </br>${o}
    </p>
    <p class="info-item">
      <b>Comments</b> </br>${a}
    </p>
    <p class="info-item">
      <b>Downloads</b> </br>${g}
    </p>
  </div>
</li>`}function v(t){return t.map(w).join("")}const s={form:document.querySelector(".form"),loader:document.querySelector(".load"),myGallery:document.querySelector(".gallery"),btn:document.querySelector(".btn")};let c,n,f;s.form.addEventListener("submit",S);s.btn.addEventListener("click",q);async function S(t){if(t.preventDefault(),c=t.target.elements.search.value.trim(),n=1,c==="")return;p();const r=await u(c,n);r.hits.length===0&&P(),f=Math.ceil(r.totalHits/15),s.myGallery.innerHTML="",m(r.hits),y(),h(),t.target.reset()}async function q(){n+=1,p();const t=await u(c,n);m(t.hits),y(),h(),s.myGallery.children.length===t.totalHits&&$()}function P(){d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}function $(){d.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}function m(t){const r=v(t);s.myGallery.insertAdjacentHTML("beforeend",r),new L(".gallery a",{captionType:"attr",captionsData:"alt",captionDelay:250}).refresh()}function p(){s.loader.classList.add("loader")}function y(){s.loader&&s.loader.classList.remove("loader")}function x(){s.btn.classList.remove("hidden")}function G(){s.btn.classList.add("hidden")}function h(){n>=f?G():x()}
//# sourceMappingURL=commonHelpers.js.map
