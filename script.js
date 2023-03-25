const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

function changeTab(event) {
  // Предотвращаем переход по ссылке
  event.preventDefault();

  // Скрытие всех вкладок
  tabContents.forEach(tabContent => {
    tabContent.style.display = 'none';
  });

  // Удаление класса active у всех кнопок
  tabButtons.forEach(tabButton => {
    tabButton.classList.remove('active');
  });

  // Отображение нужной вкладки
  const tabSelected = this.getAttribute('data-tab');
  document.querySelector(`#${tabSelected}`).style.display = 'flex';

  // Добавление класса active текущей кнопке
  this.classList.add('active');
}

// Привязка функции changeTab к клику на каждую кнопку
tabButtons.forEach(tabButton => {
  tabButton.addEventListener('click', changeTab);
});
