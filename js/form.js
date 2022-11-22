import { isEscapeKey } from './util.js';
import { openSuccessPopup, openErrorPopup } from './popup.js';
import { initEffects, resetEffects} from './effects.js';
import { initScale, resetScale } from './scale.js';
import { sendData } from './network.js';

const uploadFileInput = document.querySelector('#upload-file');
const imageUploadForm = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const submitButton = form.querySelector('#upload-submit');

function onModalEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}
function onCancelButtonClick () {
  closeModal();
}

// открывает окно редактирования фото
function openModal () {
  imageUploadForm.classList.remove('hidden');
  body.classList.add('.modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
  cancelButton.addEventListener('click', onCancelButtonClick);
  initScale();
  initEffects();
}

// закрывает окно редактирования фото
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
};

const onError = () => {
  openErrorPopup();
};


function initForm () {
  uploadFileInput.addEventListener('change', () => {
    openModal();
  });
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockSubmitButton();
    sendData(onSuccess, onError, new FormData(evt.target))
      .then(() => {
        closeModal();
        unblockSubmitButton();
      });
  });
}


export {initForm};
