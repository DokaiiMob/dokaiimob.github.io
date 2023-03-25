// получаем ссылки на вкладки и секции
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('section');

// обрабатываем клик по вкладке
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // удаляем класс 'active' у всех вкладок и секций
    tabs.forEach(tab => tab.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));

    // добавляем класс 'active' для текущей вкладки и соответствующей секции
    tab.classList.add('active');
    const targetSection = document.querySelector(tab.dataset.target);
    targetSection.classList.add('active');
  });
});
