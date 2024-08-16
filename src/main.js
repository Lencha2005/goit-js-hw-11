const formSearchEl = document.querySelector('.js-form-search');
const galleryList = document.querySelector('.list-gallery');

function onFormSearchSubmit(event){
event.preventDefault();

const inputValue = formSearchEl.elements.user_query.value;

fetch(`https://pixabay.com/api/?key=45478018-6810a6814d3c626f27e622ce2&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true`)
.then(response => {
    if(!response.ok) {
        throw new Error(response.status)
    }
    // console.dir(response.json());
    return response.json() ;
})
.then(data => {
    if (data.hits.length === 0){
        alert('Sorry, there are no images matching your search query. Please try again!');
        return;
    };
const creatGalleryCard = imgInfo => {
        return `
        <li class="gallery-card">
        <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" />
        </li>`
    };

    const CalleryList = data.hits.map(img => creatGalleryCard(img)).join('');
    galleryList.innerHTML = CalleryList;

    console.log(CalleryList);
    
    console.dir(data);})
.catch(err => console.log(err));
}


// console.log('h')
formSearchEl.addEventListener('submit', onFormSearchSubmit);