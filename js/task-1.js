// Отримую всі елементи li з класом "item"

const categories = document.querySelectorAll('#categories .item');

// Вивожу кількість категорій

console.log(`Number of categories: ${categories.length}`);

// Прохожусь по кожній категорії

categories.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('ul li');

  // Вивожу назву категорії та кількість елементів у ній

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
});
