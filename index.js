import{a as d,S as m,i as a}from"./assets/vendor-BGqwtSVv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p="56828083-7e4521b63d087d0b33cd2b929",g="https://pixabay.com/api/";function h(t){return d.get(g,{params:{key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}let l;function y(t){const o=document.querySelector(".gallery"),i=t.map(({webformatURL:n,largeImageURL:e,tags:r,likes:s,views:c,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img class="gallery-image" src="${n}" alt="${r}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><span>${s}</span></p>
          <p class="info-item"><b>Views</b><span>${c}</span></p>
          <p class="info-item"><b>Comments</b><span>${u}</span></p>
          <p class="info-item"><b>Downloads</b><span>${f}</span></p>
        </div>
      </li>
    `).join("");o&&(o.insertAdjacentHTML("beforeend",i),l?l.refresh():l=new m(".gallery a",{captionsData:"alt",captionDelay:250}))}function b(){const t=document.querySelector(".gallery");t&&(t.innerHTML="")}function L(){const t=document.querySelector(".loader");t&&t.classList.remove("is-hidden")}function S(){const t=document.querySelector(".loader");t&&t.classList.add("is-hidden")}const q=document.querySelector(".form");q.addEventListener("submit",w);function w(t){t.preventDefault();const o=t.currentTarget,i=o.elements["search-text"].value.trim();if(i===""){a.warning({title:"Warning",message:"Please fill out the search field!",position:"topRight"});return}b(),L(),h(i).then(n=>{if(n.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(n.hits)}).catch(n=>{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(n)}).finally(()=>{S(),o.reset()})}
//# sourceMappingURL=index.js.map
