import { isEscapeKey } from './util.js';

const popup = document.querySelector('.popup');
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

const successSubmitHandler = () => {

  const successPopup = successPopupTemplate.cloneNode(true);
  document.body.appendChild(successPopup);
  const closeButton = successPopup.querySelector('.success__button');

  closeButton.addEventListener('click', () => {
    closeButton.addEventListener('click', onCloseButtonClick);
    document.addEventListener('keydown', onDocumentKeydown);
    document.addEventListener('click', onDocumentClick);
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      successPopup.remove();
    }
  });

  document.addEventListener('click', (evt) => {
    if (evt.target.className === 'popup') {
      successPopup.remove();
    }
  });
};

const errorSubmitHandler = () => {
  const errorPopup = errorPopupTemplate.cloneNode(true);
  document.body.appendChild(errorPopup);
  const closeErrorButton = errorPopup.querySelector('.error__button');

  closeErrorButton.addEventListener('click', () => {
    errorPopup.remove();
  }, {once: true});

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      errorPopup.remove();
    }
  }, {once: true});

  document.addEventListener('click', (evt) => {
    if (evt.target.id !== 'error') {
      errorPopup.remove();
    }
  }, {once: true});
};


// новострой

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
  popup.querySelector('.button').addEventListener('click', onCloseButtonClick);
  popup.add(successSubmitHandler()); // не понимаю что сюда надо добавить...
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

function openErrorPopup() {
  popup.querySelector('.button').addEventListener('click', onCloseButtonClick);
  popup.add(successSubmitHandler()); // не понимаю что сюда надо добавить...
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

function closePopup() {
  popup.querySelector('.button').removeEventListener('click', onCloseButtonClick);
  popup.remove();
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

export { showAlert, successSubmitHandler, errorSubmitHandler };
