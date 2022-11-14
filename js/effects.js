
const imageUploadPreview = document.querySelector('.img-upload__preview');
const effectLevel = document.querySelector('.effect-level');
const pictureEffects = document.querySelectorAll('.effects__radio');

const effectMap = {
  'effect-none': 'effects__preview--none',
  'effect-chrome': 'effects__preview--chrome',
  'effect-sepia': 'effects__preview--sepia',
  'effect-marvin': 'effects__preview--marvin',
  'effect-phobos': 'effects__preview--phobos',
  'effect-heat': 'effects__preview--heat'
};

const removePreviousEffect = function () {
  const effectClass = imageUploadPreview.className;
  const effectsClassMassive = effectClass.split(' ');
  const isEffect = (evt) => evt.includes('effects__preview--');
  const effect = isEffect(effectClass);
  if (effect) {
    imageUploadPreview.classList.remove(effectsClassMassive[1]);
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
  if (styleClass.includes('effects__preview--none')) {
    hideEffectLevel();
  } else {
    showEffectLevel();
  }
  imageUploadPreview.classList.add(styleClass);
};

const effectClickHandler = function (evt) {
  removePreviousEffect();
  applyNewEffect(effectMap[evt.target.id]);
};

const removeEffectsHandlers = function () {
  pictureEffects.forEach((effect) => {
    effect.removeEventListener('click', effectClickHandler);
  });
};

const initEffects = () => {
  const createEffectsHandlers = function () {
    pictureEffects.forEach((effect) => {
      effect.addEventListener('click', effectClickHandler);
    });
  };
  createEffectsHandlers();
};

export {initEffects, removeEffectsHandlers};
