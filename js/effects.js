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

const isDefaultEffect = () => chosenEffect === DEFAULT_EFFECT;

const imageUploadPreview = document.querySelector('.img-upload__preview');
const effectLevel = document.querySelector('.effect-level');
const form = document.querySelector('.img-upload__form');
const slider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');

const removePreviousEffect = () => {
  const prevClasses = imageUploadPreview.className.split(' ');
  const effectClass = prevClasses.find((className) => className.includes('effects__preview--'));
  if (effectClass) {
    imageUploadPreview.classList.remove(effectClass);
  }
};

const showEffectLevel = () => {
  effectLevel.classList.remove('hidden');
};

const hideEffectLevel = () => {
  effectLevel.classList.add('hidden');
};

const applyNewEffect = () => {
  const newEffectClass = `effects__preview--${chosenEffect.name}`;
  imageUploadPreview.classList.add(newEffectClass);
};

const updateSlider = () => {
  if (isDefaultEffect()) {
    imageUploadPreview.style.filter = '';
    effectLevelValue.value = '';
    hideEffectLevel();
  } else {
    showEffectLevel();
    slider.noUiSlider.updateOptions({
      range: {
        min: chosenEffect.min,
        max: chosenEffect.max,
      },
      step: chosenEffect.step,
      start: chosenEffect.max,
    });
  }
};

const resetEffects = () => {
  hideEffectLevel();
  chosenEffect = DEFAULT_EFFECT;
  removePreviousEffect();
  updateSlider();
};

const initEffects = () => {
  hideEffectLevel();
};

const onSliderUpdate = () => {
  const sliderValue = slider.noUiSlider.get();
  effectLevelValue.value = sliderValue;
  imageUploadPreview.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
};

noUiSlider.create(slider, {
  range: {
    min:  DEFAULT_EFFECT.min,
    max:  DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
  format: {
    to: (value) => {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: (value) => {
      parseFloat(value);
    },
  },
});

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
  removePreviousEffect();
  applyNewEffect();
};

form.addEventListener('change', onFormChange);
slider.noUiSlider.on('update', onSliderUpdate);

export {initEffects, resetEffects};

