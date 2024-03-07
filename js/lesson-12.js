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