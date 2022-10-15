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

export {getRandomArrayElement, getRandomNumber};
