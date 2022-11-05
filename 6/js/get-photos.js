import {getRandomArrayElement, getRandomNumber} from './util.js';
import {PHOTO_AMOUNT, Like, Comment, DESCRIPTIONS} from './data.js';
import {openModal, closeModal} from './form.js';

const createPhoto = (_element, index) => {
  const photoId = index + 1;

  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumber(Like.MIN, Like.MAX),
    comments: getRandomNumber(Comment.MIN, Comment.MAX),
  };
};

const getPhotos = () => Array.from({length: PHOTO_AMOUNT}, createPhoto);

export {getPhotos};
