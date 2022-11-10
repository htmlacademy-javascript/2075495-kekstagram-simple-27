const photoSmaller = document.querySelector('.scale__control--smaller');
const photoBigger = document.querySelector('.scale__control--bigger');
const sizeInput = document.querySelector('.scale__control--value');
const uploadImageContainer = document.querySelector('.img-upload__preview');
const uploadImage = uploadImageContainer.querySelector('img');
const STEP = 25;
const MIN_VALUE = 25;
const MAX_VALUE = 100;
const currentValue = sizeInput.value;
const valueInNumber = parseInt(currentValue, 10);

const updateValue = (newValue) => {
  sizeInput.value = `${newValue}%`;
  uploadImage.style.transform = (`scale(${newValue / 100})`);
};

const makeSmaller = () => {
  photoSmaller.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (valueInNumber > MIN_VALUE && valueInNumber <= MAX_VALUE) {
      updateValue(valueInNumber - STEP);
    }
  });
};

const makeBigger = () => {
  photoBigger.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (valueInNumber >= MIN_VALUE && valueInNumber < MAX_VALUE) {
      updateValue(valueInNumber + STEP);
    }
  });
};

const changeSize = () => {
  makeSmaller();
  makeBigger();
};

export {changeSize};

