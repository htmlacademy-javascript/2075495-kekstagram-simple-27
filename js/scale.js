const Scale = {
  STEP: 25,
  MIN: 25,
  MAX: 100,
  DEFAULT: 100,
};
const controlDec = document.querySelector('.scale__control--smaller');
const controlInc = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview').querySelector('img'); // почему-то все сломалось

const updateScaleValue = (value = Scale.DEFAULT) => {
  previewImage.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const getScaleValue = () => parseInt(scaleInput.value, 10);

const onControlDecClick = () => {
  const currentValue = getScaleValue();
  let newValue = currentValue - Scale.STEP;
  if (newValue < Scale.MIN) {
    newValue = Scale.MIN;
  }
  updateScaleValue(newValue);
};

const onControlIncClick = () => {
  const currentValue = getScaleValue();
  let newValue = currentValue + Scale.STEP;
  if (newValue > Scale.MAX) {
    newValue = Scale.MAX;
  }
  updateScaleValue(newValue);
};

const resetScale = () => {
  controlDec.removeEventListener('click', onControlDecClick);
  controlInc.removeEventListener('click', onControlIncClick);
};

const initScale = () => {
  updateScaleValue();
  controlDec.addEventListener('click', onControlDecClick);
  controlInc.addEventListener('click', onControlIncClick);
};

export {initScale, resetScale};

