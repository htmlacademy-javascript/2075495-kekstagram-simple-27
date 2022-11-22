const photoTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const container = document.querySelector('.pictures');

const createPhoto = (data) => {
  const { comments, description, likes, url } = data;
  const photo = photoTemplate.cloneNode(true);
  photo.querySelector('.picture__img').src = url;
  photo.querySelector('.picture__img').alt = description;
  photo.querySelector('.picture__comments').textContent = comments;
  photo.querySelector('.picture__likes').textContent = likes;

  return photo;
};

const renderPhotos = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    fragment.append(createPhoto(photo));
  });

  container.append(fragment);
};


export {renderPhotos};
