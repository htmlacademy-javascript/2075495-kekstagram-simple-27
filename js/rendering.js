import {getPhotos} from './createphotos.js';

const listPhotos = document.querySelector('.picture').content;
const templatePhotos = listPhotos.querySelector('.picture');
const similarPhotos = getPhotos();
const similarListFragment = document.createDocumentFragment();

similarPhotos.forEach((photo) => {
  const photoElement = templatePhotos.clone.Node(true);
  photoElement.querySelector('.picture__img').textContent = photo.src;
  photoElement.querySelector('.picture__comments').textContent = photo.comments;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;

  listPhotos.appendChild(similarListFragment);

});

