// получаем форму для ввода ключевых слов и кнопку поиска
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');

// получаем список всех статей блога
const articles = document.querySelectorAll('.article');

// функция для поиска статей по ключевым словам
function searchArticles(keyword) {
  // проходим по всем статьям блога
  articles.forEach(article => {
    // получаем заголовок и текст статьи
    const title = article.querySelector('.article-title').textContent.toLowerCase();
    const content = article.querySelector('.article-content').textContent.toLowerCase();

    // если заголовок или текст статьи содержат ключевое слово, то отображаем эту статью
    if (title.includes(keyword) || content.includes(keyword)) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });
}

// обработчик события для кнопки поиска
searchButton.addEventListener('click', (event) => {
  event.preventDefault(); // предотвращаем отправку формы

  // получаем значение ключевого слова из поля ввода
  const keyword = searchInput.value.trim().toLowerCase();

  // вызываем функцию для поиска статей по ключевому слову
  searchArticles(keyword);
});
