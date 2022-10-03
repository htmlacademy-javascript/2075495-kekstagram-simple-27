// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    return NaN;
  }
  const randomNumber = Math.round(Math.random() * (max - min) + min);
  return randomNumber;
};

getRandomNumber(2,5);

// Функция для проверки максимальной длины строки

const isStringLengthValid = (string, maxLength) => string.length < maxLength;

isStringLengthValid ('Функция для проверки максимальной длины строки', 5);
