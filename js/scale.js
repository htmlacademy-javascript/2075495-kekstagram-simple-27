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

const scaleImage = (value = Scale.DEFAULT) => {
  previewImage.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onControlDecClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue - Scale.STEP;
  if (newValue < Scale.MIN) {
    newValue = Scale.MIN;
  }
  scaleImage(newValue);
};

const onControlIncClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue + Scale.STEP;
  if (newValue > Scale.MAX) {
    newValue = Scale.MAX;
  }
  scaleImage(newValue);
};

const resetScale = () => {
  scaleImage();
};

controlDec.addEventListener('click', onControlDecClick);
controlInc.addEventListener('click', onControlIncClick);

// const updateScaleValue = (value = Scale.DEFAULT) => {
//   previewImage.style.transform = (`scale(${value / 100})`);
//   scaleInput.value = `${value}%`;
// };

// const getScaleValue = () => parseInt(scaleInput.value, 10);

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

// const initScale = () => {
//   controlDec.addEventListener('click', onControlDecClick);
//   controlInc.addEventListener('click', onControlIncClick);
// };

export {resetScale};

