// Отримую посилання на форму

const form = document.querySelector('.login-form');

// Додаю обробник події submit на форму

form.addEventListener('submit', event => {
  // Запобігаю перезавантаженню сторінки

  event.preventDefault();

  // Отримую значення полів форми

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  // Перевіряю, чи всі поля заповнені

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  // Створюю об'єкт з даними форми

  const formData = {
    email,
    password,
  };

  // Вивожу об'єкт з даними в консоль

  console.log(formData);

  // Очищаю форму після сабміту

  form.reset();
});
