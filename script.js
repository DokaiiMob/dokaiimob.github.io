// получаем все элементы вкладок и контенты
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

// скрываем все контенты, кроме первого
contents.forEach(content => {
  if (!content.classList.contains('active')) {
    content.style.display = 'none';
  }
});

// добавляем обработчики событий на клик по вкладкам
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // удаляем класс "active" у всех вкладок и контентов
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => {
      content.classList.remove('active');
      content.style.display = 'none';
    });

    // добавляем класс "active" только выбранной вкладке и соответствующему контенту
    tab.classList.add('active');
    contents[index].classList.add('active');
    contents[index].style.display = 'block';
  });
});
