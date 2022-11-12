
const imageUploadPreview = document.querySelector('.img-upload__preview');
const effectLevel = document.querySelector('.effect-level');
const setDefaultDepthValue = document.querySelector('.effect-level__slider');

const pictureEffects = document.querySelectorAll('.effects__radio');

const effectMap = {
  'effect-none': 'effects__preview--none',
  'effect-chrome': 'effects__preview--chrome',
  'effect-sepia': 'effects__preview--sepia',
  'effect-marvin': 'effects__preview--marvin',
  'effect-phobos': 'effects__preview--phobos',
  'effect-heat': 'effects__preview--heat'
};

// imageUploadPreview.className.split('').find('effects'.includes);

// нормальная функция — потом раскомментить
// const removePreviousEffect = function () {
//   const effectClass = imageUploadPreview.className;
//   console.log(effectClass);
//   if (effectClass.match('effects__preview--')) {
//     imageUploadPreview.classList.remove(effectClass);
//     console.log(effectClass);
//   }
//   console.log(effectClass);
// };

const removePreviousEffect = function () {
  const effectClass = imageUploadPreview.className;
  const effectsClassMassive = effectClassOne.split(' ');

  if (effectsClassMassive.includes('effects__preview--')) {
    imageUploadPreview.classList.remove(effectClass);
  }
};

const showEffectLevel = function () {
  if (effectLevel.classList.contains('hidden')) {
    effectLevel.classList.remove('hidden');
  }
};

const hideEffectLevel = function () {
  effectLevel.classList.add('hidden');
};

const applyNewEffect = function (styleClass) {
  if (styleClass.match('effects__preview--none')) {
    hideEffectLevel();
  } else {
    showEffectLevel();
  }

  // setDefaultDepthValue();
  imageUploadPreview.classList.add(styleClass);
};

const effectClickHandler = function (evt) {
  removePreviousEffect();
  applyNewEffect(effectMap[evt.target.id]);
};

const createEffectsHandlers = function () {
  pictureEffects.forEach((effect) => {
    effect.addEventListener('click', effectClickHandler);
  });
};

const removeEffectsHandlers = function () {
  pictureEffects.forEach((effect) => {
    effect.removeEventListener('click', effectClickHandler);
  });
};

window.effect = {
  remove: removePreviousEffect,
  hideLevel: hideEffectLevel,
  createHandlers: createEffectsHandlers,
  removeHandlers: removeEffectsHandlers
};

const initEffects = () => {
  createEffectsHandlers();
};

export {initEffects};

