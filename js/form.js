import { openSuccessPopup, openErrorPopup } from './popup.js';
import { initEffects, resetEffects} from './effects.js';
import { initScale, resetScale } from './scale.js';
import { sendData } from './network.js';

const uploadFileInput = document.querySelector('.img-upload__input');
const imageUploadForm = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const body = document.querySelector('body');
const cancelButton = document.querySelector('.img-upload__cancel');
const submitButton = form.querySelector('.img-upload__submit');

const isEscapeKey = (evt) => evt.keyCode === 27;

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const onCancelButtonClick = () => {
  closeModal();
};

function openModal () {
  imageUploadForm.classList.remove('hidden');
  body.classList.add('.modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
  cancelButton.addEventListener('click', onCancelButtonClick);
  initScale();
  initEffects();
}

function closeModal () {
  imageUploadForm.classList.add('hidden');
  body.classList.remove('.modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
  cancelButton.removeEventListener('click', onCancelButtonClick);
  uploadFileInput.value = '';
  resetScale();
  resetEffects();
  form.reset();
}

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

const onSuccess = () => {
  openSuccessPopup();
  closeModal();
};

const onError = () => {
  openErrorPopup();
};


const initForm = () => {
  uploadFileInput.addEventListener('change', () => {
    openModal();
  });
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockSubmitButton();
    sendData(onSuccess, onError, new FormData(evt.target))
      .then(() => {
        unblockSubmitButton();
      });
  });
};


export {initForm, isEscapeKey};
