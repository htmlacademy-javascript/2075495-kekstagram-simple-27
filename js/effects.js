
const imageUploadPreview = document.querySelector('.img-upload__preview');
const effectLevel = document.querySelector('.effect-level');
const pictureEffects = document.querySelectorAll('.effects__radio');
const form = document.querySelector('.img-upload__form');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

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

const updateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  imageUploadPreview.style.filter = `${chosenEffect.style}${sliderValue}${chosenEffect.unit}`;
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});
updateSlider();


const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

form.addEventListener('change', onFormChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export {initEffects, removeEffectsHandlers};

