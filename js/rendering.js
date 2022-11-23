const photoTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const container = document.querySelector('.pictures');


const createPhoto = (data) => {
  const { comments, description, likes, url } = data;
  const photo = photoTemplate.cloneNode(true);
  const thumbnail = photo.querySelector('.picture__img');
  thumbnail.src = url;
  thumbnail.alt = description;
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
