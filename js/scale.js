// надо спрятать шкалу на дефолтном изображении

const controlDec = document.querySelector('.scale__control--smaller');
const controlInc = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview').querySelector('img'); // почему-то все сломалось
const Scale = {
  STEP: 25,
  MIN: 25,
  MAX: 100,
  DEFAULT: 100,
};

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


// const onControlDecClick = () => {
//   controlDec.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     const scaleValue = getScaleValue();
//     const newScaleValue = scaleValue - Scale.STEP;
//     if (newScaleValue >= Scale.MIN) {
//       updateScaleValue(newScaleValue);
//       console.log(updateScaleValue(newScaleValue));
//     }
//   });
// };

// const onControlIncClick = () => {
//   controlInc.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     const scaleValue = getScaleValue();
//     const newScaleValue = scaleValue + Scale.STEP;
//     if (newScaleValue <= Scale.MAX) {
//       updateScaleValue(newScaleValue);
//     }
//   });
// };

export {initScale, resetScale};

