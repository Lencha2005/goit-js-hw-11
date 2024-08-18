import{S as u,i as m}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p=t=>`
    <li class="gallery-card">
    <a class="gallery-link" href="${t.largeImageURL}">
    <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" />
    </a>
    <ul class="list-info">
    <li class="item-info">
    <p class="item-text-info">Likes</p>
    <p class="item-text-value">${t.likes}</p>
    </li>
    <li class="item-info">
    <p class="item-text-info">Views</p>
    <p class="item-text-value">${t.views}</p>
    </li>
    <li class="item-info">
    <p class="item-text-info">Comments</p>
    <p class="item-text-value">${t.comments}</p>
    </li>
    <li class="item-info">
    <p class="item-text-info">Download</p>
    <p class="item-text-value">${t.downloads}</p>
    </li>
    </ul>
    </li>`,f="https://pixabay.com/api/",n=document.querySelector(".js-loader"),d=t=>{n.classList.toggle("is-hidden");const i=new URLSearchParams({key:"45478018-6810a6814d3c626f27e622ce2",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${i}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},a=document.querySelector(".js-form-search"),c=document.querySelector(".list-gallery");function h(t){t.preventDefault();const i=a.elements.user_query.value;d(i).then(s=>{if(c.innerHTML="",a.reset(),s.hits.length===0){m.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}const o=s.hits.map(e=>p(e)).join("");c.innerHTML=o,y.refresh()}).catch(s=>console.log(s)).finally(()=>{n.classList.toggle("is-hidden")})}a.addEventListener("submit",h);const y=new u(".list-gallery a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.8});
//# sourceMappingURL=commonHelpers.js.map
