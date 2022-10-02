// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getRandom = (min, max) => {
  const randomNumber = Math.round(Math.random() * (max - min) + min);
  if (min < 0 || max < 0) {
    return NaN;
  } else if (min >= max) {
    return NaN;
  }
  return randomNumber;
};

getRandom(2,5);

// Функция для проверки максимальной длины строки

const isStringLengthFine = (anyString, maxLength) => {
  if (anyString.length > maxLength) {
    return false;
  }
  return true;
};

isStringLengthFine ('Функция для проверки максимальной длины строки', 5);
