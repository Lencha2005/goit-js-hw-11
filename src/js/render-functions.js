export const creatGalleryCard = imgInfo => {
    return `
    <li class="gallery-card">
    <a class="gallery-link" href="${imgInfo.largeImageURL}">
    <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" />
    </a>
    <ul class="list-info">
    <li class="item-info">
    <p class="item-text-info">Likes</p>
    <p class="item-text-value">${imgInfo.likes}</p>
    </li>
    <li class="item-info">
    <p class="item-text-info">Views</p>
    <p class="item-text-value">${imgInfo.views}</p>
    </li>
    <li class="item-info">
    <p class="item-text-info">Comments</p>
    <p class="item-text-value">${imgInfo.comments}</p>
    </li>
    <li class="item-info">
    <p class="item-text-info">Download</p>
    <p class="item-text-value">${imgInfo.downloads}</p>
    </li>
    </ul>
    </li>`
};