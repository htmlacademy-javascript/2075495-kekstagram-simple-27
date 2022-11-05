// import {isEscapeKey} from './util.js'; — пыталась сначала по-умному, как в демо, но тогда у меня на любую кнопку срабатывает, хз

const uploadFileInput = document.querySelector('#upload-file');
const imageUploadForm = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');

// открывает окно редактирования фото
function openModal () {
  imageUploadForm.classList.remove('hidden');
  body.classList.add('.modal-open');

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      imageUploadForm.classList.add('hidden');
      body.classList.remove('.modal-open');
    }
    uploadFileInput.value = ''; // это чтобы «сбрасывать значение поля выбора файла #upload-file»
  });
}

// закрывает окно редактирования фото
function closeModal () {
  imageUploadForm.classList.add('hidden');
  body.classList.remove('.modal-open');
}

uploadFileInput.addEventListener('change', () => {
  openModal();
});

cancelButton.addEventListener('click', () => {
  closeModal();
});

export {openModal, closeModal};
