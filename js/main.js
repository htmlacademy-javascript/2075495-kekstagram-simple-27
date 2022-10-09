// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getRandomNumber = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const randomNumber = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(randomNumber);
};

getRandomNumber(2,5);

// Функция для проверки максимальной длины строки

const isStringLengthValid = (string, maxLength) => string.length <= maxLength;

isStringLengthValid ('Функция для проверки максимальной длины строки', 5);

// Необходимые функции для создания массива из 25 сгенерированных объектов

// массив с описаниями фото

descriptionMassive = [
  'Глуп тот человек, который никогда не меняет своего мнения. / Уинстон Черчилль',
  'Работа, которую мы делаем охотно, исцеляет боли. / Уильям Шекспир',
  'Страх — одно из самых естественных человеческих чувств. / Марк Леви',
  'В моем словаре нет слова «невозможно». / Наполеон Бонапарт',
  'Успех - это успеть. / Марина Цветаева',
  'Последняя степень неудачи — это первая ступень успеха. / Карло Досси',
  'Когда кажется, что весь мир настроен против вас, вспомните, что самолет взлетает не по ветру, а против него. / Генри Форд'
]

// функция для генерации описаний
const createDescription = () => {
  let randomDescriptionIndex = getRandomNumber(0, descriptionMassive.length - 1);
  const randomDescription = descriptionMassive[randomDescriptionIndex];
  return {
    description: randomDescription,
  };
};

// id должен быть от 1 до 25 и не повторяться
idMassive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

// функция для генерации id (не уверена, что работает как должно...)
const getId = () => {
  for (let i = 1; i < idMassive.length; i++) {
  if (i === idMassive[i]) {
    return getId();
  }
  let idIndex = getRandomNumber(0, idMassive.length - 1);
  return idMassive[idIndex];
}
}

// функция для генерации номера фото в url — не знаю как делать

//

//генерация элемента массива из демонстрации кода и магии...

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];


// попытка объединить всё, что есть в ДЗ, в одну функцию
const createAccount = () => {
  id: getId(),
  url: getRandomArrayElement(url),
  description: createDescription(),
  likes: getRandomNumber(15,200), //тут генерация лайков
  comments: getRandomNumber(0, 200), // тут генерация комментов
};


