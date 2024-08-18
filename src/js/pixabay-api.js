
const BASE_URL = 'https://pixabay.com/api/';
export const formSearchEl = document.querySelector('.js-form-search');
export const galleryList = document.querySelector('.list-gallery');
export const loader = document.querySelector('.js-loader');

export const fetchPhotos = inputValue => {
    galleryList.innerHTML = '';
    formSearchEl.reset();
    loader.classList.toggle('is-hidden');
    const urlParams = new URLSearchParams({
        key:'45478018-6810a6814d3c626f27e622ce2',
        q: inputValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

return fetch(`${BASE_URL}?${urlParams}`)
.then(response => {
    if(!response.ok) {
        throw new Error(response.status)
    }
    // console.dir(response.json());
    return response.json() ;
})
}