const controlDec = document.querySelector('.scale__control--smaller');
const controlInc = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview').querySelector('img');
const Scale = {
  STEP: 25,
  MIN: 25,
  MAX: 100
};

const updateScaleValue = (newValue) => {
  scaleInput.value = `${newValue}%`;
  previewImage.style.transform = (`scale(${newValue / 100})`);
};

const getScaleValue = () => parseInt(scaleInput.value, 10);


const onControlDecClick = () => {
  controlDec.addEventListener('click', (evt) => {
    evt.preventDefault();
    const scaleValue = getScaleValue();
    const newScaleValue = scaleValue - Scale.STEP;
    if (newScaleValue >= Scale.MIN) {
      updateScaleValue(newScaleValue);
    }
  });
};

const onControlIncClick = () => {
  controlInc.addEventListener('click', (evt) => {
    evt.preventDefault();
    const scaleValue = getScaleValue();
    const newScaleValue = scaleValue + Scale.STEP;
    if (newScaleValue <= Scale.MAX) {
      updateScaleValue(newScaleValue);
    }
  });
};

const initScale = () => {
  controlDec.addEventListener('click', onControlDecClick);
  controlInc.addEventListener('click', onControlIncClick);
};

const removeScale = () => {
  controlDec.removeEventListener('click', onControlDecClick);
  controlInc.removeEventListener('click', onControlIncClick);
};

export {initScale, removeScale};

