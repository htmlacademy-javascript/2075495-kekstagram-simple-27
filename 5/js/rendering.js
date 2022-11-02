
// Изначально я пыталась решить задачу на основе теории вот так:

// import {getPhotos} from './createphotos.js';
// const listPhotos = document.querySelector('.picture').content;
// const templatePhotos = listPhotos.querySelector('.picture');


//   const similarPhotos = getPhotos();
// const similarListFragment = document.createDocumentFragment();

// similarPhotos.forEach((photo) => {
//   const photoElement = templatePhotos.clone.Node(true);
//   photoElement.querySelector('.picture__img').textContent = photo.src;
//   photoElement.querySelector('.picture__comments').textContent = photo.comments;
//   photoElement.querySelector('.picture__likes').textContent = photo.likes;

//   listPhotos.appendChild(similarListFragment);

// });

// Ничего не работало, и я решила посмотреть лайв за 6 и 7 раздел. Списала код оттуда. В чем-то разобралась, в чем-то не очень. Но главное, что ничего всё равно не заработало...

const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const container = document.querySelector('.pictures');

const createPicture = (data) => {
  const { comments, description, likes, url } = data;
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;

  return picture;
};

const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);
    fragment.append(pictureElement);
  });

  container.append(fragment);
};

export {renderPictures};
