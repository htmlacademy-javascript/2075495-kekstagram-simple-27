import { isEscapeKey, isStringLengthValid } from './util.js';
import { successSubmitHandler, errorSubmitHandler } from './popup.js';
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
}

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

function initForm (onSuccess, onFail) {
  uploadFileInput.addEventListener('change', () => {
    openModal();
  });
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (isStringLengthValid(Comment, Comment.MAX)) { // вот тут не знаю, как проверку сделать
      blockSubmitButton();
      sendData(onSuccess, onFail, new FormData(evt.target))
        .then(() => closeModal())
        .then(() => unblockSubmitButton());
    }
  });
}

initForm(successSubmitHandler, errorSubmitHandler);

export {initForm};
