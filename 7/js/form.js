import { isEscapeKey } from './util.js';
import { initEffects, resetEffects} from './effects.js';
import { initScale, resetScale } from './scale.js';

const uploadFileInput = document.querySelector('#upload-file');
const imageUploadForm = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
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

function initForm () {
  uploadFileInput.addEventListener('change', () => {
    openModal();
  });
}

export {initForm};
