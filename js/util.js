// util.js — модуль с генерацией рандомного числа и генерацией случайного элемента массива
// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getRandomNumber = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const randomNumber = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(randomNumber);
};

getRandomNumber(2,5);

// Функция для проверки максимальной длины строки

const isStringLengthValid = (string, maxLength) => string.length <= maxLength;

isStringLengthValid ('Функция для проверки максимальной длины строки', 5);

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.keyCode === 27;

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

const successSubmitHandler = () => {
  const successPopup = document.querySelector('#success')
    .content
    .querySelector('.success')
    .cloneNode(true);
  document.body.appendChild(successPopup);
  const closeSuccessButton = document.querySelector('.success__button');

  closeSuccessButton.addEventListener('click', () => {
    successPopup.remove();
  }, {once: true});

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      successPopup.remove();
    }
  }, {once: true});

  document.addEventListener('click', (evt) => {
    if (evt.target.id !== 'success') {
      successPopup.remove();
    }
  }, {once: true});
};

const errorSubmitHandler = () => {
  const errorPopup = document.querySelector('#error')
    .content
    .querySelector('.error')
    .cloneNode(true);
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

export {getRandomArrayElement, getRandomNumber, isEscapeKey, showAlert, successSubmitHandler, errorSubmitHandler};
