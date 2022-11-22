import { isEscapeKey } from './util.js';

const ALERT_SHOW_TIME = 5000;

const showAlert = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.background = 'red';
  alertContainer.style.margin = 'auto';

  alertContainer.textContent = 'Не удалось загрузить данные. Попробуйте снова.';

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const successPopupTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorPopupTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const onCloseButtonClick = () => {
  closePopup();
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopup();
  }
}

function onDocumentClick() {
  closePopup();
}

function openSuccessPopup() {
  const successPopup = successPopupTemplate.cloneNode(true);
  successPopup.querySelector('.button').addEventListener('click', onCloseButtonClick);
  document.body.appendChild(successPopup);
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

function openErrorPopup() {
  const errorPopup = errorPopupTemplate.cloneNode(true);
  errorPopup.querySelector('.button').addEventListener('click', onCloseButtonClick);
  document.body.appendChild(errorPopup);
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

function closePopup() {
  const popup = document.querySelector('.popup');
  popup.querySelector('.button').removeEventListener('click', onCloseButtonClick);
  popup.remove();
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

export { showAlert, openSuccessPopup, openErrorPopup };
