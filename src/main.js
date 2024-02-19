import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchPictures } from './js/pixabay-api.js';
import { templateGalleries } from './js/render-functions.js';

const refs = {
  form: document.querySelector('.form'),
  loader: document.querySelector('.load'),
  myGallery: document.querySelector('.gallery'),
  btn: document.querySelector('.btn'),
};

let inputValue;
let page;
let maxPage;

refs.form.addEventListener('submit', onSubmit);
refs.btn.addEventListener('click', onClick);

async function onSubmit(event) {
  event.preventDefault();

  inputValue = event.target.elements.search.value.trim();

  page = 1;

  if (inputValue === '') {
    return;
  }

  showLoader();

  const response = await fetchPictures(inputValue, page);

  if (response.hits.length === 0) {
    error();
  }

  maxPage = Math.ceil(response.totalHits / 15);

  refs.myGallery.innerHTML = '';

  renderGalleries(response.hits);

  hideLoader();

  checkClassList();

  event.target.reset();
}

async function onClick() {
  page += 1;

  showLoader();

  const response = await fetchPictures(inputValue, page);

  renderGalleries(response.hits);

  hideLoader();

  checkClassList();

  const height =
    refs.myGallery.firstElementChild.getBoundingClientRect().height;

  scrollBy({
    behavior: 'smooth',
    top: height * 2,
  });

  if (refs.myGallery.children.length === response.totalHits) {
    messageInfo();
  }
}

function error() {
  iziToast.error({
    position: 'topRight',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
}

function messageInfo() {
  iziToast.info({
    position: 'topRight',
    message: "We're sorry, but you've reached the end of search results.",
  });
}

function renderGalleries(array) {
  const markup = templateGalleries(array);

  refs.myGallery.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.refresh();
}

function showLoader() {
  refs.loader.classList.add('loader');
}

function hideLoader() {
  if (refs.loader) {
    refs.loader.classList.remove('loader');
  }
}

function showLoadBtn() {
  refs.btn.classList.remove('hidden');
}

function hideLoadBtn() {
  refs.btn.classList.add('hidden');
}

function checkClassList() {
  if (page >= maxPage) {
    hideLoadBtn();
  } else {
    showLoadBtn();
  }
}
