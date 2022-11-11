const ControlDec = document.querySelector('.scale__control--smaller');
const ControlInc = document.querySelector('.scale__control--bigger');
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

const onControlDec = () => {
  ControlDec.addEventListener('click', (evt) => {
    const getScaleValue = () => parseInt(scaleInput.value, 10);
    evt.preventDefault();
    if (((getScaleValue - Scale.STEP) > Scale.MIN) && ((getScaleValue + Scale.STEP) <= Scale.MAX)) {
      return updateScaleValue(getScaleValue - Scale.STEP);
    }
  });
};

const onControlInc = () => {
  ControlInc.addEventListener('click', (evt) => {
    const getScaleValue = () => parseInt(scaleInput.value, 10);
    evt.preventDefault();
    if (((getScaleValue - Scale.STEP) > Scale.MIN) && ((getScaleValue + Scale.STEP) <= Scale.MAX)) {
      return updateScaleValue(getScaleValue + Scale.STEP);
    }
  });
};

const initScale = () => {
  onControlDec();
  onControlInc();
};

export {initScale};

