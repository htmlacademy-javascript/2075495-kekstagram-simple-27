import { isEscapeKey } from './util.js'; // вот сейчас подключила функцию и использую ее в коде, но срабатывает на каждую клавишу

const uploadFileInput = document.querySelector('#upload-file');
const imageUploadForm = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
function onModalEscKeydown (evt) {
  if (isEscapeKey) {
    evt.preventDefault();
    closeModal ();
  }
}

// открывает окно редактирования фото
function openModal () {
  imageUploadForm.classList.remove('hidden');
  body.classList.add('.modal-open');
  document.addEventListener('keydown', onModalEscKeydown, { once: true });
  cancelButton.addEventListener('click', closeModal, { once: true });
}

// закрывает окно редактирования фото
function closeModal () {
  imageUploadForm.classList.add('hidden');
  body.classList.remove('.modal-open');
  uploadFileInput.value = '';
}

function initForm () {
  uploadFileInput.addEventListener('change', openModal);
}

export {initForm};
