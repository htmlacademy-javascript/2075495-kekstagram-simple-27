
const imageUploadPreview = document.querySelector('.img-upload__preview');
const effectLevel = document.querySelector('.effect-level');
const pictureEffects = document.querySelectorAll('.effects__radio');
const form = document.querySelector('.img-upload__form');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');

const EFFECTS = {
  none: {
    MIN: 0,
    MAX: 100,
    STEP: 1,
    FILTER: 'none'
  },
  chrome: {
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    FILTER: 'grayscale',
    UNIT: '',
  },
  sepia: {
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    FILTER: 'sepia',
    UNIT: '',
  },
  marvin: {
    MIN: 0,
    MAX: 100,
    STEP: 1,
    FILTER: 'invert',
    UNIT: '%',
  },
  phobos: {
    MIN: 0,
    MAX: 3,
    STEP: 0.1,
    FILTER: 'blur',
    UNIT: 'px',
  },
  heat: {
    MIN: 1,
    MAX: 3,
    STEP: 0.1,
    FILTER: 'brightness',
    UNIT: '',
  },
};

// помню, что effectMap надо убрать, но пока хз как. Если убираю, у меня ломается applyNewEffect и effectClickHandler
const effectMap = {
  'effect-none': 'effects__preview--none',
  'effect-chrome': 'effects__preview--chrome',
  'effect-sepia': 'effects__preview--sepia',
  'effect-marvin': 'effects__preview--marvin',
  'effect-phobos': 'effects__preview--phobos',
  'effect-heat': 'effects__preview--heat'
};

const DEFAULT_EFFECT = EFFECTS.none;
let chosenEffect = DEFAULT_EFFECT;

const isSliderShown = () => chosenEffect === DEFAULT_EFFECT;

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
  if (styleClass.includes('effects__preview--none'))
  {
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
      min: chosenEffect.MIN,
      max: chosenEffect.MAX,
    },
    step: chosenEffect.STEP,
    start: chosenEffect.MAX,
  });

  if (isSliderShown()) {
    sliderElement.classList.add('hidden');
  }
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  effectLevelValue.value = sliderValue;
  imageUploadPreview.style.filter = `${chosenEffect.style}${sliderValue}${chosenEffect.unit}`;
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.MIN,
    max: DEFAULT_EFFECT.MAX,
  },
  start: DEFAULT_EFFECT.MAX,
  step: DEFAULT_EFFECT.STEP,
  connect: 'lower',
});

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = (effect) => EFFECTS[effect.name] === evt.target.value;
  updateSlider();
};

form.addEventListener('change', onFormChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export {initEffects, removeEffectsHandlers};

