const BASE_URL = 'https://27.javascript.pages.academy/kekstagram-simpl';
/**
 * Функция для получения данных с сервера методом GET
 * @param {Function} onSuccess - коллбэк функция, которая вызывается при успешном ответе с сервера
 * @param {Function} onError - коллбэк функция, которая вызывается при отрицательном ответе с сервера
 * @return {Promise} - возвращает промис
 */
const getData = (onSuccess, onError) => fetch(`${BASE_URL}/data`)
  .then((response) => response.json())
  .then((data) => onSuccess(data))
  .catch(() => onError());
/**
 * Функция для отправки данных на сервер методом POST
 * @param {Function} onSuccess - коллбэк функция, которая вызывается при успешном ответе с сервера
 * @param {Function} onError - коллбэк функция, которая вызывается при отрицательном ответе с сервера
 * @return {Promise} - возвращает промис
 */
const sendData = (onSuccess, onError, data) => fetch(BASE_URL, {
  method: 'POST',
  body: data,
})
  .then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onError();
    }
  })
  .catch(() => onError());

export {getData, sendData};
