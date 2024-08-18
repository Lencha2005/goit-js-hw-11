import {creatGalleryCard} from './js/render-functions';
import {fetchPhotos, loader, galleryList, formSearchEl} from './js/pixabay-api';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


function onFormSearchSubmit(event){
event.preventDefault();

const inputValue = formSearchEl.elements.user_query.value;


fetchPhotos(inputValue)
.then(data => {
    // galleryList.innerHTML = '';
    //     formSearchEl.reset();

    if (data.hits.length === 0){
        iziToast.error({
            title: 'Error',
            position: 'topRight',
            message: 'Sorry, there are no images matching your search query. Please try again!',
        });

        return;
    };
    
    const galleryCardsTemplate = data.hits.map(img => creatGalleryCard(img)).join('');
    galleryList.innerHTML = galleryCardsTemplate;

    
    lightbox.refresh();


})
.catch(err => console.log(err))
.finally(() => {
    loader.classList.toggle('is-hidden');
});
}

formSearchEl.addEventListener('submit', onFormSearchSubmit);

const lightbox = new SimpleLightbox('.list-gallery a', { 
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.8
});