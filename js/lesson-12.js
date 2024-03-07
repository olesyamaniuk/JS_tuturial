/**
 * Обробка помилок з try...catch
 *
 * - Синтаксис
 * - Які помилки ловить
 * - ❌ помилки парсингу (parsing errors)
 * - ✅ помилки виконання (runtime errors)
 * - Ловить лише помилки в синхронному коді
 * - Як зловити помилку в асинхронному коді
 * - Об'єкт помилки
 * - name
 * - message
 * - stack
 * - Блок catch без об'єкта помилки
 */


// console.log('Start')
// let q = {};
// try {
//     throw new Error('this is error!')
// }
// catch (error){
//     console.log('No method!', error.message)
// }

// console.log('Start')



// function getPokemons(){
//     const url = 'https://pokeapi.co/api/v2/pokemon/ditto123';
//     return fetch(url).then(response => {
//         if (!response.ok){
//             throw new Error('Some error in request. Check url!');
//         }

//         return response.json();
//     })
// }

// getPokemons().then(data => console.log(data)).catch(error => console.log('Check url!'));


/**
 * Синтаксис async/await
 * try...catch
 */

// const fetchTodos = () => {
//   return fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       return data;
//     });
// };

// fetchTodos()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


async function fetchTodos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok){
      throw new Error('Problem!!!')
    }
  
    const data = await response.json();
  
    return data;
  }
  
  // console.log(fetchTodos());
  fetchTodos()
    .then(data => console.log(data))
    .catch(error => console.log('New error', error.message));
// ---------------------------------------------------------------------------------

/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 *
 * Переписуємо на async/await
 */

// function fetchPokemon(pokemonId) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
//     (response) => response.json()
//   );
// }

async function fetchPokemon(pokemonId){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    return response.json()
  }
  
  const cardContainer = document.querySelector(".card-container");
  const searchForm = document.querySelector(".search-form");
  
  searchForm.addEventListener("submit", onSearch);
  
  function onSearch(e) {
    e.preventDefault();
  
    const form = e.currentTarget;
    const searchQuery = form.elements.query.value;
  
    fetchPokemon(searchQuery)
      .then(renderPokemonCard)
      .catch(onFetchError)
      .finally(() => form.reset())
  }
  
  function renderPokemonCard({ name, sprites, weight, height, abilities }) {
    const abilityListItems = abilities
      .map((ability) => `<li class="list-group-item">${ability.name}</li>`)
      .join("");
  
    const markup = `<div class="card">
     <div class="card-img-top">
       <img src="${sprites.front_default}" alt="${name}">
     </div>
     <div class="card-body">
       <h2 class="card-title">Ім'я: ${name}</h2>
       <p class="card-text">Вага: ${weight}</p>
       <p class="card-text">Зростання: ${height}</p>
  
       <p class="card-text"><b>Уміння</b></p>
       <ul class="list-group">${abilityListItems}</ul>
     </div>
  </div>`;
    cardContainer.innerHTML = markup;
  }
  
  function onFetchError(error) {
    alert("Упс, щось пішло не так і ми не знайшли вашого покемона!");
  }



  /**
 * Перепишемо на async/await
 * Використовуємо бібліотеку https://axios-http.com/
 *
 * Використовуємо сервіс https://mockapi.io/ для бекенду
 */

/**
 * Read (GET)
 */

// function fetchBooks() {
//   return fetch("/books").then((res) => res.json());
// }

// function fetchBookById(bookId) {
//   return fetch(`/books/${bookId}`).then((res) => res.json());
// }

axios.defaults.baseURL = 'https://65dce223e7edadead7ed0bb2.mockapi.io/';

function fetchBooks(){
  return axios.get('/books').then(response => console.log(response.data));
}

function fetchBookById(id) {
  return axios.get(`/books/${id}`).then(response => console.log(response.data))
}

// fetchBooks();
// fetchBookById(2);
// fetchBookById(4);

/**
 * Create (POST)
 */

// function addBook(book) {
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(`${BASE_URL}/books`, options).then((res) => res.json());
// }

// addBook({
//   title: "Тестова книга з CSS",
//   author: "Я",
//   genres: ["CSS"],
//   Rating: 9,
// })
//   .then((book) => {
//     console.log("Прийшла відповідь від бекенда можна малювати");
//     console.log(book);
//   })
//   .catch((error) => console.log(error));

// addBook({
//   title: "Тестова книга з HTML",
//   author: "Я",
//   genres: ["HTML"],
//   Rating: 7,
// }).then((book) => {
//   console.log("Прийшла відповідь від бекенда можна малювати");
//   console.log(book);
// });


// function addNewBook(data){
//   axios.post('/books', data).then(response => console.log(response.data))
// }

// addNewBook({
//   name: 'ttt',
//   author: 'aaa'
// })

// /**
//  * Update (PUT/PATCH)
//  */

// function updateBookById(update, bookId) {
//   const options = {
//     метод: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(update),
//   };

//   return fetch(`/books/${bookId}`, options).then((res) => res.json());
// }

// // updateBookById({ title: "Велика нова книга по NODEJS" }, 19);
// // updateBookById({ rating: 1 }, 18);
// // updateBookById({ rating: 4, author: "Манго" }, 17);

// function updateBookById(update, bookId){
//   axios.put(`/books/${bookId}`, update).then(response => console.log(response.data))
// }

// updateBookById({author: 'qqqq'}, 26)


// /**
//  * Delete (DELETE)
//  */

// function removeBook(bookId) {
//   const options = {
//     method: "DELETE",
//   };

//   return fetch(`/books/${bookId}`, options).then((res) => res.json());
// }

function removeBook(bookId){
  axios.delete(`/books/${bookId}`).then(response => console.log(response.data))
}

removeBook(15);
removeBook(14);
// ----------------------------------------------------------------------------------

/**
 * Отримуємо ключ https://newsapi.org/
 * Запити робитимемо на http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 *
 * Пагінація: номер групи та кількість елементів групи
 * - Завантажуємо статті при самітті форми
 * - Завантажуємо статті при натисканні на кнопку «Завантажити ще»
 * - Оновлюємо групу в параметрах запиту
 * - Рендерим статті
 * - Скидання значення при пошуку за новим критерієм
 * - Показуємо спинер поки йде запит
 */

const searchFormm = document.querySelector(".search-formm");
const articlesContainer = document.querySelector(".articles");
const loadMoreBtn = document.querySelector('[data-action="load-more"]');
const spinner = document.querySelector('[data-action="load-more"] span.spinner-border');

const TOKEN = "723c1af1f15b42cc96f23314359d47d4"

async function getNews(query, amount, page){
  
  const resp = await fetch(`http://newsapi.org/v2/everything?q=${query}&language=en&pageSize=${amount}&page=${page}&apiKey=${TOKEN}`);
  

  if (!resp.ok){
    throw new Error('Problem with request to news API!');
  }

  return resp.json()
}



function appendArticlesMarkup(articles) {
  const markup = articles
    .map(
      ({ url, urlToImage, title, author, description }) => `
   <li>
     <a href="${url}" target="_blank" rel="noopener noreferrer">
       <article>
         <img src="${urlToImage}" alt="" width="480">
         <h2>${title}</h2>
         <p>Posted by: ${author}</p>
         <p>${description}</p>
       </article>
     </a>
   </li>`
    )
    .join("");

  articlesContainer.insertAdjacentHTML("beforeend", markup);
}


let current_page;
let current_query;


searchFormm.addEventListener('submit', event => {
  event.preventDefault();
  articlesContainer.innerHTML = null;
  const query = event.target.elements.query.value.trim();

  if (!query){
    return;
  }

  getNews(query, 5, 1).then(data => {

    if (!data.articles.length){
      alert('No such articles. Provide another query..')
      return;
    }

    appendArticlesMarkup(data.articles)
    current_query = query;
    current_page = 1;
    loadMoreBtn.classList.remove('is-hidden')
  })
  .catch(e => alert(e.message))
})


loadMoreBtn.addEventListener('click', event => {
  spinner.classList.remove('is-hidden')
  current_page++;
  getNews(current_query, 5, current_page).then(data => {
    appendArticlesMarkup(data.articles)
    spinner.scrollIntoView()
    spinner.classList.add('is-hidden')
  }).catch(e => alert(e.message))


})