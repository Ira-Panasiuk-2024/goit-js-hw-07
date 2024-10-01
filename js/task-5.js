function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримую посилання на необхідні елементи

const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.body;

// Додаю обробник події "click" на кнопку

changeColorButton.addEventListener('click', () => {
  // Генерую випадковий колір

  const randomColor = getRandomHexColor();

  // Задаю колір фону для body

  body.style.backgroundColor = randomColor;

  // Вставляю значення кольору в текстовий вміст span.color

  colorSpan.textContent = randomColor;
});
