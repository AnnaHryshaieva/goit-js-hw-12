import{a as b,i as d,S as L}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function u(t,r){return(await b.get("https://pixabay.com/api/",{params:{key:"34206508-2ad29bd7e91dc1db4e67bd855",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}function w(t){const{largeImageURL:r,webformatURL:s,tags:l,likes:e,views:o,comments:n,downloads:g}=t;return`<li class="gallery-item">
  <a href="${r}">
    <img src="${s}" class="gallery-image" alt="${l}" />
  </a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b> </br>${e}
    </p>
    <p class="info-item">
      <b>Views</b> </br>${o}
    </p>
    <p class="info-item">
      <b>Comments</b> </br>${n}
    </p>
    <p class="info-item">
      <b>Downloads</b> </br>${g}
    </p>
  </div>
</li>`}function v(t){return t.map(w).join("")}const i={form:document.querySelector(".form"),loader:document.querySelector(".load"),myGallery:document.querySelector(".gallery"),btn:document.querySelector(".btn")};let c,a,f;i.form.addEventListener("submit",S);i.btn.addEventListener("click",q);async function S(t){if(t.preventDefault(),c=t.target.elements.search.value.trim(),a=1,c==="")return;p();const r=await u(c,a);r.hits.length===0&&G(),f=Math.ceil(r.totalHits/15),i.myGallery.innerHTML="",m(r.hits),h(),y(),t.target.reset()}async function q(){a+=1,p();const t=await u(c,a);m(t.hits),h(),y();const r=i.myGallery.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:r*2}),i.myGallery.children.length===t.totalHits&&P()}function G(){d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}function P(){d.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}function m(t){const r=v(t);i.myGallery.insertAdjacentHTML("beforeend",r),new L(".gallery a",{captionType:"attr",captionsData:"alt",captionDelay:250}).refresh()}function p(){i.loader.classList.add("loader")}function h(){i.loader&&i.loader.classList.remove("loader")}function $(){i.btn.classList.remove("hidden")}function x(){i.btn.classList.add("hidden")}function y(){a>=f?x():$()}
//# sourceMappingURL=commonHelpers.js.map
